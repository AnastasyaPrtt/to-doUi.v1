import React, { ReactNode } from 'react'
import styled from 'styled-components'

export const DropdownStyled = styled.div`
	display: none;
	position: absolute;
	background: #D5CAFD;
	border-radius: 10px;
	&.active{
		display: block;
		z-index: 2;

	}
`


export interface DropdownProps {
	children: ReactNode
	active: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ children, active, ref }) => {
	console.log(ref)
	return (
		<DropdownStyled className={active ? 'active' : ''} ref={ref}>
			{children}
		</DropdownStyled>
	)
}

export default Dropdown