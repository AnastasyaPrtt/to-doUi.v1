import axios from 'axios';
import jwtDecode from 'jwt-decode';

export async function getTasks(filter: string | boolean, page: number) {
	try {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user: any = jwtDecode(token)
			const {data} = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL_TASKS}` + `?userId=${user.id}` + `&filterBy=${filter}` + `&page=${page}`)
			return data.tasks
		}
	} catch (error: any) {
		alert(error.response.data.message)
	}
}