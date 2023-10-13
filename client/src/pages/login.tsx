import { login, registration } from '@/http/userAPI'
import { FormAuth, Global } from '@/styles/style'
import { REGISTRATION_ROUTER } from '@/utils/consts'
import Link from 'next/link'
import React, { useState } from 'react'

const Login = () => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	// const signIn = async () => {
	// 	const response = await login()
	// 	console.log(response)
	// }
	// //
	return (
		<>
			<Global />
			<FormAuth>
				<h1>Авторизация</h1>

				<input type="text" placeholder="Введите email ..." value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" placeholder="Введите пароль ..." value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="text">
					<div>
						Нет аккаунта? <Link href={REGISTRATION_ROUTER} >Зарегистрируйся!</Link>
					</div>
				</div>
				<button>Войти</button>
			</FormAuth>
		</>
	)
}

export default Login
