import jwt_decode from 'jwt-decode';
import { $authHost, $host } from './index'

export const registration = async (email: string, password: string) => {
	const { data } = await $host.post('api/user/registration', { email, password })
	localStorage.setItem('TOKEN', data.token)
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}
export const login = async (email: string, password: string) => {
	const { data } = await $host.post('api/user/login', { email, password })
	const arr = JSON.stringify(jwt_decode(data.token))
	localStorage.setItem('TOKEN', data.token)
	localStorage.setItem('token', arr)
	return jwt_decode(data.token)
}
export const check = async () => {
	const { data } = await $authHost.post('api/user/auth')
	// const arr = JSON.stringify(jwt_decode(data.token))
	localStorage.setItem('token', data.token)
	return jwt_decode(data.token)
}