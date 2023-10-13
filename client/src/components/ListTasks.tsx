import { Context } from '@/pages/_app'
import { ListTasksStyle, TaskStyle } from '@/styles/style'
import React, { useContext, useEffect } from 'react'
import { Task } from './Task'
import { CheckedIcon, InfoIcon } from '../../public'
import { observer } from 'mobx-react-lite'

interface ListTasksProps {
	onClick: (id: number) => void
}
export const ListTasks: React.FC<ListTasksProps> = observer(({ onClick }) => {

	const { task } = useContext(Context)
	return (
		<ListTasksStyle>
			<div>
				{task.tasks.map(item => (
					<Task key={item.id} item={item} onClick={onClick} />
				))}
			</div>
		</ListTasksStyle>
	)
})
