import { FormAuth, Global } from '@/styles/style';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true)
	const [auth, setAuth] = useState(false)
	const router = useRouter()

	const signIn = () => {

		if (isLogin) {
			axios
				.post('http://localhost:7000/api/user/login', { email, password })
				.then(data => {
					localStorage.setItem('token', data.data.token)
					setAuth(true)
				})
				.catch((error) => alert(error.response.data.message))
		} else {
			axios
				.post('http://localhost:7000/api/user/registration', { email, password })
				.then(data => {
					localStorage.setItem('token', data.data.token)
					setAuth(true)
				})
				.catch((error) => alert(error.response.data.message))
		}
	}


	useEffect(() => {
		if (window.localStorage.token) {
			console.log('!')
			router.back()
		}
	}, [auth])

	return (
		<>
			<Global />
			<FormAuth>
				{isLogin ? <h1>Авторизация</h1> : <h1>Регистрация</h1>}
				<input type="text" placeholder="Введите email ..." value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" placeholder="Введите пароль ..." value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="text">
					{
						isLogin ?
							<div>
								Нет аккаунта? <span onClick={() => setIsLogin(false)}>Зарегистрироваться</span>
							</div> :
							<div>
								Есть аккаунт? <span onClick={() => setIsLogin(true)}>Войти</span>
							</div>
					}
				</div>
				{isLogin ? <button onClick={() => { signIn(); }}>Войти</button> : <button onClick={signIn}>Зарегистрироваться</button>}
			</FormAuth>
		</>
	)
}

export default Registration
