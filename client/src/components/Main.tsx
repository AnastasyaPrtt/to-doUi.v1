import { MainStyle } from '@/styles/style'
import { Navbar } from './navbar/Navbar'
import React, { useContext, useState } from 'react'
import { Context } from '@/pages/_app'
import { ListTasks } from './ListTasks'
import { Modal } from './Modal'
import { DeleteIcon, SaveIcon } from '../../public'
import { dateNow } from '@/DateNow'
import { observer } from 'mobx-react-lite'

export const Main: React.FC = observer(() => {

	const { task } = useContext(Context)
	const [modal, setModal] = useState('none')
	const [createTask, setCreateTask] = useState({ title: '', date: dateNow })
	const [taskDelete, setTaskDelete] = useState<number>()
	const addTask = () => [
		setModal('add')
	]
	const handleOpenModalDelete = (id: number) => {
		setModal('delete')
		setTaskDelete(id)
	}
	return (<>
		<MainStyle>
			<Navbar
				addTask={addTask}
			/>
			<ListTasks
				// handleOpenModalDelete={handleOpenModalDelete}
				onClick={handleOpenModalDelete}
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
				onClickSave={() => { task.addTask(createTask); setModal('none') }}
			>
				<input
					type="text"
					placeholder='Enter text...'
					value={createTask.title}
					onChange={(e) => setCreateTask(createTask => ({ ...createTask, title: e.target.value }))}
				/>
				<input
					type="date"
					value={createTask.date}
					onChange={(e) => setCreateTask(createTask => ({ ...createTask, date: e.target.value }))}
				/>
			</Modal>
		}
		{
			modal == 'delete' &&
			<Modal title={'Delete task'} nameBtn={'Delete'} active={modal} onClickClose={() => setModal('none')} onClickSave={() => { setModal('none'); task.removeTask(taskDelete) }} IconBtn={<DeleteIcon />}>
				<h3>Are you sure about deleting this task?</h3>
			</Modal>
		}
	</>
	)
})