import React from 'react'
import styled from 'styled-components'
const LoaderStyle = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: white;
`
export const Loader: React.FC = () => {
	return (
		<LoaderStyle>
			Loading ...
		</LoaderStyle>
	)
}
