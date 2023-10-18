import axios from 'axios';

export async function registration(email: string, password: string) {
	try {
		const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL_USER}` + 'registration', {email, password})
		if(data.token !== undefined){
			localStorage.setItem('token', data.token)
		}
		return data
	} catch (error:any) {
		alert(error.response.data.message)
	}
}