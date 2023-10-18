import React, { useRef, useState } from 'react'
import { Button, ButtonNav } from '../ui/Button'
import { AddTaskIcon, AllIcon, CalendarIcon, DateIcon } from "../../../public";
import { NavBarStyle } from '@/styles/style';
import useOnClickOutside from '@/useOnClickOutside';
import { NavbarProps } from '@/interface/interface';



export const Navbar: React.FC<NavbarProps> = ({ addTask, onClick, filter }) => {

	const [isActive, setIsActive] = useState(false)
	const [btn, setBtn] = useState('All')
	const [filterBtn, setFilterBtn] = useState(true)

	const changeButtonName = (name: string, show: boolean) => {
		setIsActive(false)
		setBtn(name)
		name === 'All' ? filter(name) : name == 'Done' ? filter(true) : filter(false)
		setFilterBtn(show)
	}

	const filterButton = (name: string) => {
		filter(name)
		setFilterBtn(false)
		setBtn('All')
	}

	const ref = useRef();
	useOnClickOutside(ref, () => setIsActive(false));

	return (
		<NavBarStyle>
			<div>
				<ButtonNav onClick={(e) => filterButton('Today')} >
					<CalendarIcon className='icon' />
					Today
				</ButtonNav>
				<ButtonNav onClick={(e) => setIsActive(true)} className={filterBtn ? 'active' : ''}>
					<AllIcon className='icon' />
					{btn}
				</ButtonNav>

				<div className={isActive ? 'dropdown active' : 'dropdown'} ref={ref} >
					<ButtonNav onClick={(e) => changeButtonName('All', true)}>
						<AllIcon className='icon' />
						All
					</ButtonNav>
					<ButtonNav onClick={(e) => changeButtonName('Done', true)}>
						<AllIcon className='icon' />
						Done
					</ButtonNav>
					<ButtonNav onClick={(e) => changeButtonName('Undone', true)}>
						<AllIcon className='icon' />
						Undone
					</ButtonNav>
				</div>

				<ButtonNav onClick={(e) => filterButton('Date')}>
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
