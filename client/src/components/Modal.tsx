import { ModalStyle, ModalWrapStyle } from '@/styles/style'
import React from 'react'
import { Button } from './ui/Button';
import { CloseIcon } from '../../public';
import { ModalProps } from '@/interface/interface';


export const Modal: React.FC<ModalProps> = ({ active, title, nameBtn, IconBtn, children, onClickClose, onClickSave }) => {

	return (
		<ModalWrapStyle
			className={active == 'add' || active == 'delete' ? "active" : ""}

		>
			<ModalStyle>
				<div className="header-modal">
					<h3>{title}</h3>
				</div>
				<div className="body-modal">{children}</div>
				<div className="footer-modal">
					<Button name={nameBtn} onClick={onClickSave}>
						{IconBtn}
						{nameBtn}
					</Button>
					<Button name={"Close"} onClick={onClickClose}>
						<CloseIcon />
						{"Close"}
					</Button>
				</div>
			</ModalStyle>
		</ModalWrapStyle>
	)
};
