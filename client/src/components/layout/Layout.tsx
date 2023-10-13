import { LayoutProps } from '@/interface/interface'
import React, { ReactNode } from 'react'
import { Typography } from '../Typography'
import { LayoutStyle } from '@/styles/style'
import { Header } from '../header/Header'

export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<LayoutStyle>
			<Typography />
			<div>
				<Header />
				{children}
			</div>
		</LayoutStyle>
	)
}
