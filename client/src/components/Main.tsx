import { MainStyle } from '@/styles/style'
import { Navbar } from './navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { ListTasks } from './ListTasks'
import { Modal } from './Modal'
import { DeleteIcon, SaveIcon } from '../../public'
import axios from 'axios'
import { TaskProps } from '@/interface/interface'
import jwtDecode from 'jwt-decode'

export const Main: React.FC = () => {

	const [modal, setModal] = useState('none')
	const [tasks, setTasks] = useState<TaskProps[]>([])

	const [renderTasks, setRenderTasks] = useState(tasks)
	const [count, setCount] = useState(1)
	const [page, setPage] = useState(1)											// количество тасков
	const [createTask, setCreateTask] = useState({ title: '', date: '' })
	const [removeTask, setRemoveTask] = useState<number>(0)

	const handleOpenModalDelete = (id: number) => {
		setModal('delete')
		setRemoveTask(id)
	}

	const handleCompleteStatusUpdate = async (item: TaskProps) => {
		setTasks(tasks.map(task => task.id == item.id ? { ...task, isChecked: !task.isChecked } : task))
		const isChecked = !item.isChecked
		axios
			.put('http://localhost:7000/api/tasks/' + `${item.id}`, { isChecked })
			.then(data => console.log(data))
			.catch((err) => console.error(err))
	}

	const handleClickEditTask = (item: TaskProps, title: string) => {
		setTasks(tasks.map(task => task.id == item.id ? { ...task, title: title } : task))
		axios
			.put('http://localhost:7000/api/tasks/' + `${item.id}`, { title })
			.then(data => console.log(data))
			.catch((err) => console.error(err))
	}

	const handleClickDelete = () => {
		setTasks(tasks.filter(task => task.id !== removeTask))
		setModal('none')
		axios
			.delete('http://localhost:7000/api/tasks/' + `${removeTask}`)
			.then(data => console.log(data))
			.catch((err) => console.error(err))
		setCount(count - 1)
		page !== 1 ? setPage(page - 1) : setPage(page)
		getTasks('All')
	}

	const addTask = () => {
		if (createTask.title == '') return;
		const task: TaskProps = {
			id: tasks.length,
			title: createTask.title,
			date: createTask.date,
			isChecked: false
		}
		postCreateTask(task)
		setPage(1)
		setCreateTask({ title: '', date: '' })
		setModal('none')
	}

	const getTasks = (filter: string) => {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user = jwtDecode(token)
			axios
				.get('http://localhost:7000/api/tasks?userId=' + `${user.id}` + `&filterBy=${filter}` + `&page=${page}`)
				.then(data => {
					setTasks(data.data.tasks.rows)
					setCount(data.data.tasks.count)
				})
				.catch((err) => console.error(err))
		}
	}

	const postCreateTask = async (task: TaskProps) => {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user = jwtDecode(token)
			axios
				.post('http://localhost:7000/api/tasks/' + `${user.id}`, task)
				.then(data => console.log(data.data))
				.catch((err) => console.error(err))
		}
		getTasks('All')
	}

	useEffect(() => {
		getTasks('All')
	}, [])
	useEffect(() => {
		getTasks('All')
		setCount(count)
	}, [page])

	useEffect(() => {
		setRenderTasks(tasks)
		if (page !== 1) {
			tasks.length == 0 ? setPage(page - 1) : setPage(page)
		}
		setPage(page)
	}, [tasks])

	return (<>
		<MainStyle>
			<Navbar
				addTask={() => setModal('add')}
				filter={(filter) => getTasks(filter)}
			/>
			<ListTasks
				tasks={renderTasks}
				handleCompleteStatusUpdate={handleCompleteStatusUpdate}
				handleClickEditTask={handleClickEditTask}
				handleOpenModalDelete={handleOpenModalDelete}
				pageNumber={(page: number) => setPage(page)}
				count={count} pageActive={page} />
		</MainStyle>
		{
			modal == 'add' &&
			<Modal
				title={'Create task'}
				nameBtn={'Save'}
				active={modal}
				IconBtn={<SaveIcon />}
				onClickClose={() => setModal('none')}
				onClickSave={addTask}
			>
				<input
					type="text"
					placeholder='Enter text...'
					value={createTask.title}
					onChange={(e) => setCreateTask(taskNew => ({ ...taskNew, title: e.target.value }))}
				/>
				<input
					type="date"
					value={createTask.date}
					onChange={(e) => setCreateTask(taskNew => ({ ...taskNew, date: e.target.value }))}
				/>
			</Modal >
		}
		{
			modal == 'delete' &&
			<Modal title={'Delete task'} nameBtn={'Delete'} active={modal} onClickClose={() => setModal('none')} onClickSave={handleClickDelete} IconBtn={<DeleteIcon />}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal>
		}
	</>
	)
}