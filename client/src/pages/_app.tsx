import { Layout } from '@/components/layout/Layout'
import type { AppProps } from 'next/app'
import Head from 'next/head'


export default function App({ Component, pageProps }: AppProps) {
	return <>
		<Head>
			<title>To Do Ui</title>
		</Head>
		<Layout>
			<Component {...pageProps} />
		</Layout>
	</>
}
