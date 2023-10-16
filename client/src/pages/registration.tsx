import { login, registration } from '@/http/userAPI';
import { FormAuth, Global } from '@/styles/style';
import { Context } from '@/utils/context';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import jwt_decode from 'jwt-decode';
import React, { useContext, useState } from 'react'
import { useRouter } from 'next/router';

const Registration = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true)
	const router = useRouter()
	const signIn = () => {
		if (isLogin) {
			axios
				.post('http://localhost:5000/api/user/login', { email, password })
				.then(data => {
					localStorage.setItem('token', data.data.token)
				})
		} else {
			axios
				.post('http://localhost:5000/api/user/registration', { email, password })
				.then(data => {
					localStorage.setItem('token', data.data.token)
				})
		}
		redirect()

	}
	const redirect = () => {
		if (localStorage.getItem('token')) {
			router.back()
		}
	}

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
				{isLogin ? <button onClick={signIn}>Войти</button> : <button onClick={signIn}>Зарегистрироваться</button>}
			</FormAuth>
		</>
	)
}

export default Registration
