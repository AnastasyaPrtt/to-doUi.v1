import { ListTasksStyle, TaskStyle } from '@/styles/style'
import React, { useContext, useEffect, useState } from 'react'
import { Task } from './Task'
import { CheckedIcon, InfoIcon } from '../../public'
import { observer } from 'mobx-react-lite'
import { Context } from '@/utils/context'
import axios from 'axios'
import { TaskProps } from '@/interface/interface'

interface ListTasksProps {
	onClick: (id: number) => void
	task: TaskProps[]
	onChange: () => void
}


export const ListTasks: React.FC<ListTasksProps> = observer(({ onClick, task, onChange }) => {
	// const { task } = useContext(Context)


	return (
		<ListTasksStyle>
			<div>
				{
					task.map(el => (
						<Task key={el.id} item={el} onClick={onClick} onChange={onChange} />
					))
				}
			</div>
		</ListTasksStyle>
	)
})
