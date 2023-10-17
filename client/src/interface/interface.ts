import { ReactNode } from 'react';

export interface LayoutProps {
	children: ReactNode
}
export interface ButtonNavProps {
	children: ReactNode
	onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
	className?: string
}

export interface ButtonProps {
	children: ReactNode,
	name?: string,
	onClick: (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
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
	onClickSave: () => void,
}
export interface ListTasksProps {
	tasks: TaskProps[]
	handleCompleteStatusUpdate: (item: TaskProps) => void
	handleClickEditTask: (item: TaskProps, title: string) => void
	handleOpenModalDelete: (id: number) => void,
	pageNumber: (page: number) => void,
	count: number,
	pageActive: number
}
export interface PaginationProps {
	pageNumber: (page: number) => void,
	count: number,
	pageActive: number,
}
export interface NavbarProps {
	addTask: () => void,
	onClick?: () => void,
	filter: (filter: string) => void
}
export interface TaskInterface {
	task: TaskProps,
	handleOpenModalDelete: (id: number) => void,
	handleCompleteStatusUpdate: (task: TaskProps) => void
	handleClickEditTask: (task: TaskProps, title: string) => void
}