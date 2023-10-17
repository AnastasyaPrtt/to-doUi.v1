import { Main } from '@/components/Main';
import { Header } from '@/components/header/Header';
import { Layout } from '@/components/layout/Layout';
import { check } from '@/http/userAPI';
import { Global } from '@/styles/style';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';


const Home = () => {
	const router = useRouter()



	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/registration', undefined, { shallow: true })
		}
		// check().then(data => {
		// 	console.log(data)
		// })
	}, [])


	return (
		<>
			<Global />
			<div>
				<Header />
				<Main />
			</div>

		</>
	)
}

export default Home