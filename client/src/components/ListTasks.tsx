import { ListTasksStyle } from '@/styles/style'
import { Task } from './Task'
import { ListTasksProps } from '@/interface/interface'
import Pagination from './ui/Pagination'



export const ListTasks: React.FC<ListTasksProps> = ({
	tasks,
	handleCompleteStatusUpdate,
	handleClickEditTask,
	handleOpenModalDelete,
	pageNumber,
	count,
	pageActive
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
							handleOpenModalDelete={handleOpenModalDelete} />
					))
				}
			</div>
			<Pagination pageNumber={pageNumber} count={count} pageActive={pageActive} />
		</ListTasksStyle>
	)
}
