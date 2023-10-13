import styled, { createGlobalStyle, css } from 'styled-components';

export const Global = createGlobalStyle`
	*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  };
  body{
    background: linear-gradient(75deg, #F6D1FC, #B9D5FF);
    font-family: 'Roboto', sans-serif;
    padding: 254px 90px;
    margin: auto 90px;
  };
`
export const FormAuth = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  h1 {
    text-align: center;
    color: #9333ea;
    margin-bottom: 40px;
  }
  input {
    height: 30px;
    margin-bottom: 15px;
    padding: 5px;
    border: 1px solid gray;
    border-radius: 5px;
    outline: none;
  }
  button {
    background: linear-gradient(120deg, #f6d1fc, #b9d5ff);
    height: 40px;
    background-size: 200% 100%;
    background-position: 100% 0;
    transition: background-position 0.5s;
    border: 0;
    padding: 5px;
    color: white;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-position: 0 0;
    }
  }
  .text {
    cursor: pointer;
    margin-bottom: 10px;
    span {
      color: #9333ea;
      &:hover {
        text-decoration: solid;
      }
    }
  }
`;
export const LayoutStyle = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`
export const TypographyStyle = styled.div`
	min-width: 376px;
	height: 390px;
	display: flex;
	align-items: center;
	justify-content: center;
  div {
    color: #404040;
    font-weight: 700;
    font-size: 96px;
    
    padding: auto 0;
    margin-right: 166px;
    & span {
      color: #9333ea;
    }
  }
`;
export const HeaderContainer = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	width: 672px;
	background: #f4f4f4;
	border-radius: 10px;
	padding: 12px 16px;
	margin-bottom: 30px;
	color: #9333EA;

	& h2{
		font-size: 20px;
		font-weight: 700;
	}
	& p{
		font-size: 16px;
		font-weight: 400;
	}
`
export const ButtonNavStyle = styled.button`
	background: none;
	color: #6B7280;
	padding: 8px;
	margin: 5px 0;
	text-align: start;
	border-radius: 10px;
	transition: all .2s;

	&:hover{
		background: #9333EA0F;
		color: #9333EA;
	}
	&.active{
		background: #9333EA0F;
		color: #9333EA;                                  
	}
	&:focus{
		background: #9333EA0F;
		color: #9333EA;
	}
`;
export const ButtonStyle = styled.button<{ $name?: string }>`
	width: 185px;
	padding: 10px 40px;
	color: #9333EA;
	border-radius: 10px;
	outline: none;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.2s;
	cursor: pointer;

	${(props) => {
		switch (props.$name) {
			case 'add task':
				return css`
					background: #9333EA0F;
					color: #9333EA;`
			case 'Save':
				return css`
					background: #67B8CB0F;
					color: #67B8CB;`
			case 'Close':
				return css`
					background: #6B72800F;
					color: #6B7280;`
			case 'Delete':
				return css`
				background: #F564970F;
				color: #F56497;`
		}
	}}

	&:hover{
		${(props) => {
		switch (props.$name) {
			case 'Add task':
				return css`
					background: #9233ea4b;
					color: #9333EA;`
			case 'Save':
				return css`
					background: #67b9cb50;
					color: #67B8CB;`
			case 'Close':
				return css`
					background: #6b728052;
					color: #6B7280;`
			case 'Delete':
				return css`
				background: #f564974b;
				color: #F56497;`
		}
	}}
	}
`;
export const MainStyle = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`
export const NavBarStyle = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  left: 0;
  width: 185px;
	height: 312px;
  button {
    cursor: pointer;
    outline: none;
    width: 100%;
    border: none;
    border-radius: 10px;
    padding: 10px;
    text-align: start;
    color: #6b7280;
    font-weight: 400;
    font-size: 16px;
    &.active {
      background: #9333ea0f;
      color: #9333ea;
    }
    &:hover {
      background: #9333ea0f;
      color: #9333ea;
    }
  }
  .icon {
    margin-right: 10px;
  }
  .dropdown {
    display: none;
    &.active {
      display: block;
      display: flex;
      flex-direction: column;
    }
  }
  .btnAdd {
    background: #9333ea0f;
    color: #9333ea;
  }
`;
export const ListTasksStyle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  overflow: auto;
  width: 466px;
  height: 312px;
  background: #f4f4f4;
  border-radius: 10px;
  padding: 30px 19px;
	&::-webkit-scrollbar{
		width: 7px;
    background-color: none;
		padding: 10px;
	}
	&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #6b728080;
}
`;
export const TaskStyle = styled.li`
	position: relative;
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	padding	: 7px 10px;
	background: #9333EA0F;
  margin-bottom: 10px;

	label, span{
		display: flex;
		flex-direction: row;
		cursor: pointer;
	}
	button{
		cursor: pointer;
		outline: none;
		background: none;
		border: none;
	}
	h3{
		font-weight: 400;
		font-size: 16px;
	}
	p{
		font-weight: 400;
		font-size: 14px;
		color: #6B7280;
	}
	input[type=checkbox]{
		display: none;
	}
	.icon{
		margin-right: 10px;
		color: #6B7280;
		&.active{
			color: #9333EA;
		}
	}

	.task-info{
		display: flex;
		flex-direction: row;
	}
`;
export const DropdownBtnStyled = styled.div`
	position: absolute;
	display: none;
	bottom: -10px;
	right: 10px;
	border-radius: 10px;
	border: 1px solid #7D40FF;
	background: white;
	padding: 2px 5px;
	&.active{
		display: block;
	}
`
export const ModalWrapStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #00000061;
  width: 0;
  height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  z-index: 1;

  &.active {
    opacity: 1;
    width: 100vw;
    height: 100vh;
  }
`;
export const ModalStyle = styled.div`
  width: 466px;
  height: 181px;
  background: #ffffff;
  border-radius: 10px;
  color: #9333ea;
  font-weight: 700;
  font-size: 20px;
  z-index: 2;
  pointer-events: all;

  .header-modal {
    width: 100%;
    height: 48px;
    background: linear-gradient(45deg, #feeff5, #f5edfd);
    border-radius: 10px;
    padding: 12px 24px;
    margin-bottom: 19px;
  }
  .body-modal {
    padding: 0 24px;
    display: flex;
    flex-direction: row;
  }
  .footer-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 22px 24px;
    margin-bottom: 17px;
  }
  input placeholder {
    color: #f3f3f3;
  }
  input {
    border-radius: 10px;
    height: 27px;
    outline: none;
    border: none;
    background: #f3f3f3;
    padding: 4px 5px;
  }
  input[type=text] {
    width: 290px;
    margin-right: 10px;
  }
  input[type=date] {
    width: 150px;
    margin: 0;
  }
`