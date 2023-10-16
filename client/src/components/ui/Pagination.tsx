import React, { useState } from "react";
import styled from "styled-components";

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;
  button{
		cursor: pointer;
		background: none;
		border: none;
		outline: none;
		border-radius: 50px;
		width: 20px;
		height: 20px;
		margin-right: 5px;
		&.active{
			border: 1px solid #983DEB;
		}
		&:hover{
			border: 1px solid #983DEB;
		}
		&:active{
			border: 1px solid #983DEB;
		}
	}
`;

interface PaginationProps {
	pageNumber: (page: number) => void
	pagination: {
		count: number
	}
}

const Pagination: React.FC<PaginationProps> = ({ pageNumber, pagination }) => {
	const pageCount = Math.ceil(pagination.count / 5)
	const [activePage, setActivePage] = useState(1)
	const pages: Array<number> = [];
	for (let i = 0; i < pageCount;) {
		pages.push(++i)
	}
	return (
		<PaginationStyle>
			<div>
				{pages.map((item) => (
					<button key={item} onClick={() => { pageNumber(item); setActivePage(item) }} className={item == activePage ? 'active' : ''}>{item}</button>
				))}
			</div>
		</PaginationStyle>
	);
};

export default Pagination;
