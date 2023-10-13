import React from 'react'
import { Button } from '../ui/Button'
import { AddTaskIcon, AllIcon, CalendarIcon, DateIcon } from "../../../public";
import { NavBarStyle } from '@/styles/style';

interface NavbarProps {
	addTask: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ addTask }) => {
	return (
		<NavBarStyle>
			<div>

			</div>
			<Button onClick={addTask} className={'btnAdd'}>
				<AddTaskIcon className='icon' />
				Add task
			</Button>
		</NavBarStyle>
	)
}
