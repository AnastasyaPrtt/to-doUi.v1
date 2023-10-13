import { registration } from '@/http/userAPI';
import { FormAuth, Global } from '@/styles/style';
import { LOGIN_ROUTER } from '@/utils/consts';
import { observer } from 'mobx-react-lite';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { Context } from './_app';
import { useRouter } from 'next/router';


const Registration = observer(() => {
	const { user } = useContext(Context)
	const router = useRouter()
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const signIn = async () => {

		try {
			let data;
			data = await registration(email, password)
			user.setUser(data);
			user.setAuth(true)
		} catch (error) {
			alert(error)
		}

	}
	if (user.isAuth) {
		router.push('http://localhost:3000')
	}

	return (
		<>
			<Global />
			<FormAuth>
				<h1>Регистрация</h1>

				<input type="text" placeholder="Введите email ..." value={email} onChange={(e) => setEmail(e.target.value)} />
				<input type="password" placeholder="Введите пароль ..." value={password} onChange={(e) => setPassword(e.target.value)} />
				<div className="text">
					<div>
						Есть аккаунта?<Link href={LOGIN_ROUTER} >Войти!</Link>
					</div>
				</div>
				<button onClick={signIn}>Зарегистрироваться</button>
			</FormAuth>
		</>
	);
});

export default Registration;