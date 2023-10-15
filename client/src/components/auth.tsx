import { login, registration } from '@/http/userAPI';
import { FormAuth, Global } from '@/styles/style';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '@/utils/context';


const Auth = observer(() => {
	const { user } = useContext(Context)

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLogin, setIsLogin] = useState(true)
	const signIn = async () => {
		try {
			let data;
			if (isLogin) {
				data = await login(email, password)
			} else {
				data = await registration(email, password)
			}
			user.setUser(user)
			user.setIsAuth(true)
		} catch (error) {
			alert(error)
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
	);
});

export default Auth;