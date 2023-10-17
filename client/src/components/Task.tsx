import { DropdownBtnStyled, TaskStyle } from '@/styles/style'
import React, { useRef, useState } from 'react'
import { CheckedIcon, DeleteIcon, EditIcon, InfoIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import useOnClickOutside from '@/useOnClickOutside'
import { TaskInterface } from '@/interface/interface'

export const Task: React.FC<TaskInterface> = observer(({
	task,
	handleOpenModalDelete,
	handleCompleteStatusUpdate,
	handleClickEditTask
}) => {

	const [isDropdown, setDropdown] = useState(false)
	const [isEdited, setIsEdited] = useState(false);
	const [title, setTitle] = useState(task.title)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key == 'Enter') setIsEdited(!isEdited)
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
