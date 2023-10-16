import React, { useContext, useRef, useState } from 'react'
import { Button, ButtonNav } from '../ui/Button'
import { AddTaskIcon, AllIcon, CalendarIcon, DateIcon } from "../../../public";
import { NavBarStyle } from '@/styles/style';
import useOnClickOutside from '@/useOnClickOutside';

interface NavbarProps {
	addTask: () => void,
	onClick?: () => void,
	filter?: (filter: string) => void
}

export const Navbar: React.FC<NavbarProps> = ({ addTask, onClick, filter }) => {

	const [isActive, setIsActive] = useState(false)
	const [btn, setBtn] = useState('All')

	const handleButtonFilter = (name: string) => {
		setIsActive(!isActive)
		setBtn(name)
	}

	const ref = useRef();
	useOnClickOutside(ref, () => setIsActive(false));
	return (
		<NavBarStyle>
			<div>
				<ButtonNav onClick={(e) => filter('today')}>
					<CalendarIcon className='icon' />
					Today
				</ButtonNav>
				<ButtonNav onClick={(e) => setIsActive(true)}>
					<AllIcon className='icon' />
					{btn}
				</ButtonNav>

				<div className={isActive ? 'dropdown active' : 'dropdown'} ref={ref}>
					<ButtonNav onClick={(e) => handleButtonFilter('All')}>
						<AllIcon className='icon' />
						All
					</ButtonNav>
					<ButtonNav onClick={(e) => handleButtonFilter('Done')}>
						<AllIcon className='icon' />
						Done
					</ButtonNav>
					<ButtonNav onClick={(e) => handleButtonFilter('Undone')}>
						<AllIcon className='icon' />
						Undone
					</ButtonNav>
				</div>

				<ButtonNav onClick={(e) => filter('date')}>
					<DateIcon className='icon' />
					Date
				</ButtonNav>

			</div>
			<Button onClick={addTask} className={'btnAdd'}>
				<AddTaskIcon className='icon' />
				Add task
			</Button>
		</NavBarStyle>
	)
}
