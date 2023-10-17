import axios from 'axios';
import jwtDecode from 'jwt-decode';

export async function getTasks(filter: string, page: number, sortVector = 'ASC') {
	try {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user: Object = jwtDecode(token)
			const tasks = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_TASKS}` + `?userId=${user.id}` + `&filterBy=${filter}` + `&page=${page}`)
			return tasks
		}
	} catch (error) {
		console.log(error)
	}
}