import { HeaderContainer } from '@/styles/style'
import Image from 'next/image'
import { Exit } from '../../../public'
import { useContext, useEffect, useState } from 'react'
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router'

export const Header: React.FC = () => {

	const router = useRouter()
	const [user, setUser] = useState('')
	const click = () => {
		router.push('/registration', undefined, { shallow: true })
		localStorage.clear()
	}
	useEffect(() => {
		const token = localStorage.getItem('token') || undefined
		if (token !== undefined) {
			const user = jwt_decode(token)
			setUser(user.email)
		}

	}, [])


	return (
		<>
			<HeaderContainer>
				<h2>To-Do</h2>
				<p>{user}</p>
				<div>
					<Image
						src='/userIcon.svg'
						alt='userIcon'
						width={16}
						height={16}
						className='icon'
					/>
					<Exit className='icon-exit' onClick={click} />
				</div>

			</HeaderContainer>
		</>
	)
}