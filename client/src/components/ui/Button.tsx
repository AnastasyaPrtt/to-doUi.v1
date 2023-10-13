import { ButtonNavProps, ButtonProps } from '@/interface/interface';
import { ButtonNavStyle, ButtonStyle } from '@/styles/style';
import React from 'react'

export const ButtonNav: React.FC<ButtonNavProps> = ({ children }) => {
	return (
		<ButtonNavStyle>
			{children}
		</ButtonNavStyle>
	)
};

export const Button: React.FC<ButtonProps> = ({ children, name, onClick, className }) => {


	return (
		<>
			<ButtonStyle className={className} $name={name} onClick={(e) => onClick(e)}>
				{children}
			</ButtonStyle>
		</>
	)
}