import jwt_decode from 'jwt-decode';
import { $authHost, $host } from './index'

export const create = async (id: number, title: string, date: string) => {
	const { data } = await $host.post('api/tasks', { id, title, date })

	return data
}
// export const getAll = async (id: n) => {
// 	const str = localStorage.getItem('token')
// 	const userID = JSON.parse(str)
// 	const { data } = await $host.get(`api/tasks + ${userID.id}`)
// 	return data
// }