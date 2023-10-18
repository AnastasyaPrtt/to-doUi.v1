import { TaskProps } from '@/interface/interface'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

export async function postCreateTask(item:TaskProps) {
	try {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user: any = jwtDecode(token)
			const task = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_TASKS}` + `${user.id}`, item)
			return task
		}
	} catch (error: any) {
		alert(error.response.data.message)
	}
}