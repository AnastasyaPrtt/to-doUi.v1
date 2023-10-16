
import { DropdownBtnStyled, TaskStyle } from '@/styles/style'
import React, { useContext, useRef, useState } from 'react'
import { CheckedIcon, DeleteIcon, EditIcon, InfoIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import useOnClickOutside from '@/useOnClickOutside'
import { Context } from '@/utils/context'
import { TaskProps } from '@/interface/interface'
import axios from 'axios'


interface TaskInterface {
	task: TaskProps,
	handleOpenModalDelete: (id: number) => void,
	handleCompleteStatusUpdate: (task: TaskProps) => void
	handleClickEditTask: (task: TaskProps, title: string) => void
}

export const Task: React.FC<TaskInterface> = observer(({
	task,
	handleOpenModalDelete,
	handleCompleteStatusUpdate,
	handleClickEditTask
}) => {

	const [isDropdown, setDropdown] = useState(false)
	const [isEdited, setIsEdited] = useState(false);
	const [isComplete, setIsComplete] = useState(task.isChecked)
	const [title, setTitle] = useState(task.title)


	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key == 'Enter') setIsEdited(!isEdited)
		console.log('!')
		handleClickEditTask(task, title)
	}



	const ref = useRef();
	useOnClickOutside(ref, () => setDropdown(false));

	return (
		<TaskStyle>
			<label>
				<span className={task.isChecked ? 'icon active' : 'icon'}>
					<input type="checkbox" checked={task.isChecked} onChange={() => handleCompleteStatusUpdate(task)} />
					<CheckedIcon />
				</span>
				{
					isEdited ?
						<input
							type="text"
							value={title}
							onKeyDown={handleKeyDown}
							onChange={(e) => setTitle(e.target.value)}
						/> :
						<h3 onClick={() => setIsEdited(false)}>{task.title}</h3>
				}
			</label>

			<div className='task-info'>
				<p>{task.date}</p>
				<div onClick={() => setDropdown(true)}>
					<InfoIcon />
					<DropdownBtnStyled ref={ref} className={isDropdown ? 'active' : ''}>
						<button onClick={() => setIsEdited(!isEdited)}>
							<EditIcon />
						</button>
						<button onClick={() => handleOpenModalDelete(task.id)}>
							<DeleteIcon />
						</button>
					</DropdownBtnStyled>
				</div>
			</div>
		</TaskStyle>
	)
})
