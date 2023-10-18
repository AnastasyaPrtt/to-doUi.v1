import axios from 'axios'

export async function putChangeTask(id: number, change:object){
	try {
		const data = await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL_TASKS}` + `${id}`, change)
		return data
	} catch (error: any) {
		alert(error.response.data.message)
	}
}