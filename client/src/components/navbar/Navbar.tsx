import React, { useContext } from 'react'
import { Button, ButtonNav } from '../ui/Button'
import { AddTaskIcon, AllIcon, CalendarIcon, DateIcon } from "../../../public";
import { NavBarStyle } from '@/styles/style';
import { Context } from '@/utils/context';
import axios from 'axios';

interface NavbarProps {
	addTask: () => void,
	onClick: () => void
}

export const Navbar: React.FC<NavbarProps> = ({ addTask, onClick }) => {



	return (
		<NavBarStyle>
			<div>
				<ButtonNav onClick={onClick}>
					<CalendarIcon />
					Today
				</ButtonNav>
				{/* <ButtonNav>
					<AllIcon />
					All
				</ButtonNav>
				<ButtonNav>
					<DateIcon />
					Date
				</ButtonNav> */}

			</div>
			<Button onClick={addTask} className={'btnAdd'}>
				<AddTaskIcon className='icon' />
				Add task
			</Button>
		</NavBarStyle>
	)
}
