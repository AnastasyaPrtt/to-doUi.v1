import axios from 'axios';

export async function deleteTask(id: number) {
	try {
		const data = await axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL_TASKS}` + `${id}`)
		return data
	} catch (error: any) {
		alert(error.response.data.message)
	}
}