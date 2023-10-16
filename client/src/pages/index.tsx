import { Layout } from '@/components/layout/Layout';
import { Global } from '@/styles/style';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const Home = () => {
	const router = useRouter()

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/registration', undefined, { shallow: true })
		}
	}, [])


	return (<>
		<Global />
		<Layout />
	</>
	)
}

export default Home