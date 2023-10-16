import { MainStyle } from '@/styles/style'
import { Navbar } from './navbar/Navbar'
import React, { useContext, useEffect, useState } from 'react'
import { ListTasks } from './ListTasks'
import { Modal } from './Modal'
import { DeleteIcon, SaveIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import { Context } from '@/utils/context'
import axios from 'axios'
import { TaskProps } from '@/interface/interface'
import jwt_decode from 'jwt-decode';

export const Main: React.FC = observer(() => {

	const [modal, setModal] = useState('none')
	const [tasks, setTasks] = useState([
		{
			id: 1,
			title: "задача 1",
			date: "2023-10-16",
			isChecked: false
		}
	])
	console.log(tasks.length)
	const [renderTasks, setRenderTasks] = useState(tasks)
	const [pagination, setPagination] = useState({ count: tasks.length })
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
	}
	const addTask = () => {
		if (createTask.title == '') return;
		const task: TaskProps = {
			id: tasks.length,
			title: createTask.title,
			date: createTask.date,
			isChecked: false
		}
		const list = [...tasks, task]

		postCreateTask(task)
		list.length > 5 ? getTasks() : null
		setTasks(list)

		setCreateTask({ title: '', date: '' })
		setModal('none')
	}


	const getTasks = (page = 1) => {
		const token = localStorage.getItem('token')
		const user = jwt_decode(token)
		axios
			.get('http://localhost:5000/api/tasks?userId=' + `${user.id}` + `&page=${page}`)
			.then(data => {
				setTasks(data.data.tasks.rows)
				setPagination({ count: data.data.tasks.count })

			})
	}

	const postCreateTask = async (task: TaskProps) => {
		const token = localStorage.getItem('token')
		const user = jwt_decode(token)
		axios
			.post('http://localhost:5000/api/tasks/' + `${user.id}`, task)
			.then(data => console.log(data.data))
	}

	useEffect(() => {
		getTasks()
	}, [])

	useEffect(() => {
		setRenderTasks(tasks)
	}, [tasks])

	return (<>
		<MainStyle>
			<Navbar
				addTask={() => setModal('add')}
			/>
			<ListTasks
				tasks={renderTasks}
				handleCompleteStatusUpdate={handleCompleteStatusUpdate}
				handleClickEditTask={handleClickEditTask}
				handleOpenModalDelete={handleOpenModalDelete}

				pageNumber={(page: number) => getTasks(page)}
				pagination={pagination}
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
			</Modal>
		}
		{
			modal == 'delete' &&
			<Modal title={'Delete task'} nameBtn={'Delete'} active={modal} onClickClose={() => setModal('none')} onClickSave={handleClickDelete} IconBtn={<DeleteIcon />}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal>
		}
	</>
	)
})