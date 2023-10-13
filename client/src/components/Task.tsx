import { Context } from '@/pages/_app'
import { DropdownBtnStyled, TaskStyle } from '@/styles/style'
import React, { useContext, useRef, useState } from 'react'
import { CheckedIcon, DeleteIcon, EditIcon, InfoIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import useOnClickOutside from '@/useOnClickOutside'

export const Task: React.FC = observer(({ item, onClick }) => {
	const { task } = useContext(Context)
	const [isDropdown, setDropdown] = useState(false)
	const [isEdited, setIsEdited] = useState(false);
	const [title, setText] = useState(item.title)

	const ref = useRef();
	useOnClickOutside(ref, () => setDropdown(false));

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsEdited(!isEdited)
			task.editTask(item.id, title)
		}
	}

	return (
		<TaskStyle>
			<label>
				<span className={item.isChecked ? 'icon active' : 'icon'}>
					<input type="checkbox" checked={item.isChecked} onChange={() => { task.completeTask(item.id); console.log(item.isChecked) }} />
					<CheckedIcon />
				</span>
				{
					isEdited ?
						<input
							type="text"
							value={title}
							onChange={(e) => setText(e.target.value)}
							onKeyDown={handleKeyDown} /> :
						<h3>{item.title}</h3>
				}
			</label>

			<div className='task-info'>
				<p>{item.date}</p>
				<div onClick={() => setDropdown(true)}>
					<InfoIcon />
					<DropdownBtnStyled ref={ref} className={isDropdown ? 'active' : ''}>
						<button onClick={() => setIsEdited(true)}>
							<EditIcon />
						</button>
						<button onClick={() => onClick(item.id)}>
							<DeleteIcon />
						</button>
					</DropdownBtnStyled>
				</div>
			</div>
		</TaskStyle>
	)
})
