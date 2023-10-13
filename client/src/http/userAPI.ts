import jwt_decode from 'jwt-decode';
import { $host } from './index'

export const registration = async (email:string, password:string) => {
	const {data} = await $host.post('api/user/registration', {email, password})
	return jwt_decode(data.token)
}
export const login = async (email:string, password:string) => {
	const {data} = await $host.post('api/user/login', {email, password})
	return jwt_decode(data.token)
}
// export const check = async () => {
// 	const response = await $host.post('api/auth/registration')
// 	return response
// }