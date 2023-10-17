import { PaginationProps } from '@/interface/interface';
import { PaginationStyle } from '@/styles/style';
import React, { useEffect, useState } from "react";

const Pagination: React.FC<PaginationProps> = ({ pageNumber, count, pageActive }) => {
	const pages = Array.from({ length: Math.ceil(count / 5) }, (_item: number, index: number) => index + 1)
	const [activePage, setActivePage] = useState(pageActive)

	useEffect(() => {
		setActivePage(pageActive)
	}, [pageActive])

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
