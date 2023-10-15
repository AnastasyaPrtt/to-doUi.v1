
import { DropdownBtnStyled, TaskStyle } from '@/styles/style'
import React, { useContext, useRef, useState } from 'react'
import { CheckedIcon, DeleteIcon, EditIcon, InfoIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import useOnClickOutside from '@/useOnClickOutside'
import { Context } from '@/utils/context'
import { TaskProps } from '@/interface/interface'
import axios from 'axios'


interface TaskInterface {
	item: TaskProps;
	onClick: (id: number) => void
	onChange: () => void
}

export const Task: React.FC<TaskInterface> = observer(({ item, onClick, onChange }) => {
	const { task } = useContext(Context)
	const [isDropdown, setDropdown] = useState(false)
	const [isEdited, setIsEdited] = useState(false);
	const [title, setTitle] = useState(item.title)

	const ref = useRef();
	useOnClickOutside(ref, () => setDropdown(false));

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			setIsEdited(!isEdited)
			updateTaskTitle()
		}
	}

	const updateTaskTitle = () => {
		onChange()
		axios
			.put('http://localhost:5000/api/tasks/' + `${item.id}`, { title })
			.catch(data => console.log(data))
		task.setIsUpdate(true)
	}
	const updateTaskChecked = () => {
		onChange()
		const isChecked = !item.isChecked
		axios
			.put('http://localhost:5000/api/tasks/' + `${item.id}`, { isChecked })
			.catch(data => console.log(data))
		task.setIsUpdate(true)
	}

	return (
		<TaskStyle>
			<label>
				<span className={item.isChecked ? 'icon active' : 'icon'}>
					<input type="checkbox" checked={item.isChecked} onChange={updateTaskChecked} />
					<CheckedIcon />
				</span>
				{
					isEdited ?
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
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
