import { MainStyle } from '@/styles/style'
import { Navbar } from './navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { ListTasks } from './ListTasks'
import { Modal } from './Modal'
import { DeleteIcon, SaveIcon } from '../../public'
import axios from 'axios'
import { TaskProps } from '@/interface/interface'
import { getTasks } from '../services/tasks/getTaskAPI'
import { postCreateTask } from '@/services/tasks/createTaskAPI'
import { putChangeTask } from '@/services/tasks/putChangeTaskAPI'
import { deleteTask } from '@/services/tasks/deleteTaskAPI'
import { useOnKeyPress } from '@/useOnKeyPress'

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
		await putChangeTask(item.id, { isChecked })
	}

	const handleClickEditTask = async (item: TaskProps, title: string) => {
		setTasks(tasks.map(task => task.id == item.id ? { ...task, title: title } : task))
		await putChangeTask(item.id, { title })
	}

	const handleClickDelete = async () => {
		setTasks(tasks.filter(task => task.id !== removeTask))
		setModal('none')
		await deleteTask(removeTask)
		setCount(count - 1)
		page !== 1 ? setPage(page - 1) : setPage(page)
		gettingTasks('All')
	}

	const addTask = () => {
		if (createTask.title == '') return;
		const task: TaskProps = {
			id: tasks.length,
			title: createTask.title,
			date: createTask.date,
			isChecked: false
		}
		newTask(task)
		setPage(1)
		setCreateTask({ title: '', date: '' })
		setModal('none')
	}

	async function gettingTasks(filter: string | boolean) {
		try {
			const tasks: any = await getTasks(filter, page)
			setTasks(tasks.rows)
			setCount(tasks.count)
		} catch (error) {
			alert(error)
		}
	}

	async function newTask(item: TaskProps) {
		try {
			await postCreateTask(item)
		} catch (error) {
			console.log(error)
		}
		gettingTasks('All')
	}

	const closeModal = () => {
		setModal('none')
	}


	useEffect(() => {
		gettingTasks('All')
	}, [])

	useEffect(() => {
		gettingTasks('All')
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
				filter={(filter) => gettingTasks(filter)}
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