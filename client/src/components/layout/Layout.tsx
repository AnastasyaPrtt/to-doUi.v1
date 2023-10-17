import { LayoutProps } from '@/interface/interface'
import React from 'react'
import { Typography } from '../Typography'
import { LayoutStyle } from '@/styles/style'


export const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (<>
		<LayoutStyle>
			<Typography />
			{children}
		</LayoutStyle>
	</>
	)
}
