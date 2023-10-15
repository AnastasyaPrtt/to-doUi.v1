import { MainStyle } from '@/styles/style'
import { Navbar } from './navbar/Navbar'
import React, { useContext, useEffect, useState } from 'react'

import { ListTasks } from './ListTasks'
import { Modal } from './Modal'
import { DeleteIcon, SaveIcon } from '../../public'
import { dateNow } from '@/DateNow'
import { observer } from 'mobx-react-lite'
import { Context } from '@/utils/context'
import axios from 'axios'
import { TaskProps } from '@/interface/interface'

export const Main: React.FC = observer(() => {

	// const { task } = useContext(Context)

	const [modal, setModal] = useState('none')
	const [task, setTask] = useState([])
	const [renderTasks, setRenderTasks] = useState(task)
	const [render, isRender] = useState(false)

	const [taskNew, setTaskNew] = useState({ title: '', date: '' })
	const [taskDelete, setTaskDelete] = useState<number>(0)

	const getTasks = () => {
		const str = localStorage.getItem('token')
		const userID = JSON.parse(str)
		axios
			.get('http://localhost:5000/api/tasks/' + `${userID.id}`)
			.then(data => {
				const tasks = data.data.tasks
				setTask(tasks.sort((a: TaskProps, b: TaskProps) => {
					if (a.id > b.id) return 1
					if (a.id < b.id) return -1
					return 0
				}).map(el => el))
			})
	}
	const handleOpenModalDelete = (id: number) => {
		setModal('delete')
		setTaskDelete(id)
	}
	const createTask = async () => {

		const str = localStorage.getItem('token')
		const userID = JSON.parse(str)
		axios
			.post('http://localhost:5000/api/tasks/' + `${userID.id}`, taskNew)
			.then(data => console.log(data.data))
		setModal('none')
		setTaskNew({ title: '', date: '' })
		isRender(!render)
	}
	const deleteTask = async () => {

		axios
			.delete('http://localhost:5000/api/tasks/' + `${taskDelete}`)
			.then(data => console.log(data.data))
		setModal('none')
		isRender(!render)
	}
	const filterToday = () => {
		isRender(false)
		const str = localStorage.getItem('token')
		const userID = JSON.parse(str)

		axios
			.get('http://localhost:5000/api/tasks?userId=' + `${userID.id}`)
			.then(data => setTask(data.data.tasks))

		// task.setIsUpdate(true)

	}
	useEffect(() => {
		getTasks()
	}, [render])

	useEffect(() => {
		setRenderTasks(task)
	}, [task])
	// useEffect(() => {
	// 	
	// 	task.setIsUpdate(false)
	// }, [])

	return (<>
		<MainStyle>
			<Navbar
				addTask={() => setModal('add')}
				onClick={() => filterToday()}
			/>
			<ListTasks
				onClick={handleOpenModalDelete}
				task={renderTasks}
				onChange={() => isRender(!render)}
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
				onClickSave={createTask}
			>
				<input
					type="text"
					placeholder='Enter text...'
					value={taskNew.title}
					onChange={(e) => setTaskNew(taskNew => ({ ...taskNew, title: e.target.value }))}
				/>
				<input
					type="date"
					value={taskNew.date}
					onChange={(e) => setTaskNew(taskNew => ({ ...taskNew, date: e.target.value }))}
				/>
			</Modal>
		}
		{
			modal == 'delete' &&
			<Modal title={'Delete task'} nameBtn={'Delete'} active={modal} onClickClose={() => setModal('none')} onClickSave={deleteTask} IconBtn={<DeleteIcon />}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal>
		}
	</>
	)
})