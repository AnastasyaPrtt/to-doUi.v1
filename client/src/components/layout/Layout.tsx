import { LayoutProps } from '@/interface/interface'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Typography } from '../Typography'
import { LayoutStyle } from '@/styles/style'
import { Header } from '../header/Header'
import { Main } from '../Main'
import { Context } from '@/utils/context'
import Auth from '../auth'
import { observer } from 'mobx-react-lite'
import { check } from '@/http/userAPI'
import { Loader } from '../loader'


export const Layout: React.FC = observer(() => {
	const { user } = useContext(Context)
	const [loading, setLoading] = useState(false)

	// useEffect(() => {
	// 	check().then(data => {
	// 		user.setUser(true)
	// 		user.setIsAuth(true)
	// 	}).finally(() => setLoading(false))
	// }, [])


	return (<>
		{loading ? <Loader /> :
			<LayoutStyle>
				<Typography />
				{
					user.isAuth ?
						<div>
							<Header />
							<Main />
						</div> :
						<Auth />
				}
			</LayoutStyle>}
	</>


	)
})
