import { HeaderContainer } from '@/styles/style'
import Image from 'next/image'
import { Exit } from '../../../public'
import { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '@/utils/context'

export const Header: React.FC = observer(() => {
	const { user } = useContext(Context)
	const click = () => {
		user.setUser({})
		user.setIsAuth(false)
	}
	return (
		<>
			<HeaderContainer>
				<h2>To-Do</h2>
				<p>userName</p>
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
})