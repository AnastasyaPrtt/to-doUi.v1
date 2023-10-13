import { ReactNode } from 'react';

export interface LayoutProps{
	children: ReactNode
}
export interface ButtonNavProps{
	children: ReactNode
}

export interface ButtonProps{
	children: ReactNode,
	name?: string,
	onClick?: (e) => void,
	className?: string
}
export interface TaskProps {
	id: number,
	title: string,
	date: string,
	isChecked: boolean
}
export interface ModalProps {
	active: string,
	title: string,
	nameBtn: string,
	IconBtn: ReactNode,
	children: ReactNode,
	onClickClose: () => void,
	onClickSave: () => void
}