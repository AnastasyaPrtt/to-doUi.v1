import { Main } from '@/components/Main';
import { Typography } from '@/components/Typography';
import { Layout } from '@/components/layout/Layout';
import { Global } from '@/styles/style';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { Context } from './_app';


export default function Home() {

	const { user } = useContext(Context)


	return (
		<>
			<Global />
			<Layout>
				<Main />
			</Layout>
		</>
	)
}
