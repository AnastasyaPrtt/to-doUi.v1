import { LayoutProps } from '@/interface/interface'
import React, { ReactNode, useContext, useEffect, useState } from 'react'
import { Typography } from '../Typography'
import { LayoutStyle } from '@/styles/style'
import { Header } from '../header/Header'
import { Main } from '../Main'
import { Context } from '@/utils/context'
import Auth from '../auth'
import { observer } from 'mobx-react-lite'
import { useRouter } from 'next/router'


export const Layout: React.FC = () => {


	return (<>
		<LayoutStyle>
			<Typography />

			<div>
				<Header />
				<Main />
			</div>

		</LayoutStyle>
	</>
	)
}
