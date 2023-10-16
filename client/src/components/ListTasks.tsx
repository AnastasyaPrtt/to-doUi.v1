import { ListTasksStyle, TaskStyle } from '@/styles/style'
import React, { useContext, useEffect, useState } from 'react'
import { Task } from './Task'
import { observer } from 'mobx-react-lite'
import { TaskProps } from '@/interface/interface'
import Pagination from './ui/Pagination'

interface ListTasksProps {
	tasks: TaskProps[]
	handleCompleteStatusUpdate: (item: TaskProps) => void
	handleClickEditTask: (item: TaskProps, title: string) => void
	handleOpenModalDelete: (id: number) => void,
	pageNumber: (page: number) => void,
	count: number
}

export const ListTasks: React.FC<ListTasksProps> = observer(({
	tasks,
	handleCompleteStatusUpdate,
	handleClickEditTask,
	handleOpenModalDelete,
	pageNumber,
	count
}) => {



	return (
		<ListTasksStyle>
			<div>
				{
					tasks.map(task => (
						<Task key={task.id}
							task={task}
							handleCompleteStatusUpdate={handleCompleteStatusUpdate}
							handleClickEditTask={handleClickEditTask}
							handleOpenModalDelete={handleOpenModalDelete}

						/>
					))
				}
			</div>
			<Pagination pageNumber={pageNumber} count={count} />

		</ListTasksStyle>
	)
})
