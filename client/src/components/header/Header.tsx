import { HeaderContainer } from '@/styles/style'
import Image from 'next/image'

export const Header: React.FC = () => {
	return (
		<>
			<HeaderContainer>
				<h2>To-Do</h2>
				<p>userName</p>
				<Image
					src='/userIcon.svg'
					alt='userIcon'
					width={16}
					height={16}
				/>
			</HeaderContainer>
		</>
	)
}