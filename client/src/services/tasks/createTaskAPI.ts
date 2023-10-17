import { TaskProps } from '@/interface/interface'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export async function postCreateTask(item: TaskProps) {
	try {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user: Object = jwtDecode(token)
			const task = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_TASKS}` + `${user.id}`, item)
			return task
		}
	} catch (error) {
		console.log(error)
	}
}