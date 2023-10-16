import { MainStyle } from '@/styles/style'
import { Navbar } from './navbar/Navbar'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ListTasks } from './ListTasks'
import { Modal } from './Modal'
import { DeleteIcon, SaveIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import axios from 'axios'
import { TaskProps } from '@/interface/interface'
import jwtDecode from 'jwt-decode'
import useOnClickOutside from '@/useOnClickOutside'

export const Main: React.FC = observer(() => {

	const [modal, setModal] = useState('none')
	const [tasks, setTasks] = useState<TaskProps[]>([])

	const [renderTasks, setRenderTasks] = useState(tasks)
	const [count, setCount] = useState(tasks.length) 													// количество тасков
	const [createTask, setCreateTask] = useState({ title: '', date: '' })
	const [removeTask, setRemoveTask] = useState<number>(0)

	const ref = useRef();
	useOnClickOutside(ref, () => setModal('none'));

	const handleOpenModalDelete = (id: number) => {
		setModal('delete')
		setRemoveTask(id)
	}
	const handleCompleteStatusUpdate = async (item: TaskProps) => {
		setTasks(tasks.map(task => task.id == item.id ? { ...task, isChecked: !task.isChecked } : task))
		const isChecked = !item.isChecked
		axios
			.put('http://localhost:5000/api/tasks/' + `${item.id}`, { isChecked })
			.then(data => console.log(data))
	}
	const handleClickEditTask = (item: TaskProps, title: string) => {
		setTasks(tasks.map(task => task.id == item.id ? { ...task, title: title } : task))
		axios
			.put('http://localhost:5000/api/tasks/' + `${item.id}`, { title })
			.then(data => console.log(data))
	}
	const handleClickDelete = () => {
		setTasks(tasks.filter(task => task.id !== removeTask))
		setModal('none')
		axios
			.delete('http://localhost:5000/api/tasks/' + `${removeTask}`)
			.then(data => console.log(data))
		setCount(count - 1)
	}
	const addTask = () => {
		if (createTask.title == '') return;
		const task: TaskProps = {
			id: tasks.length,
			title: createTask.title,
			date: createTask.date,
			isChecked: false
		}
		const list = [task, ...tasks]
		const limit = 5
		postCreateTask(task)
		// if (list.length > limit) {
		// 	setCount(count)
		// }
		setTasks(list)
		setCreateTask({ title: '', date: '' })
		setModal('none')
	}

	const getTasks = (filter: string, page = 1) => {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user = jwtDecode(token)
			axios
				.get('http://localhost:5000/api/tasks?userId=' + `${user.id}` + `&filterBy=${filter}` + `&page=${page}`)
				.then(data => {
					setTasks(data.data.tasks.rows)
					setCount(data.data.tasks.count)
				})
		}
	}

	const postCreateTask = async (task: TaskProps) => {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user = jwtDecode(token)
			axios
				.post('http://localhost:5000/api/tasks/' + `${user.id}`, task)
				.then(data => console.log(data.data))
		}
	}

	useEffect(() => {
		getTasks('all')
	}, [])

	useEffect(() => {
		setRenderTasks(tasks)
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
				pageNumber={(page: number) => getTasks('all', page)}
				count={count}
			/>
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
				ref={ref}
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
			<Modal title={'Delete task'} nameBtn={'Delete'} active={modal} onClickClose={() => setModal('none')} onClickSave={handleClickDelete} IconBtn={<DeleteIcon />} ref={ref}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal>
		}
	</>
	)
})