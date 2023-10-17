import axios from 'axios';

export async function login() {
	console.log('!')
	try {
		const token = await axios.post('http://localhost:7000/api/user/login')
		return token
	} catch (error) {
		console.log(error)
	}
}