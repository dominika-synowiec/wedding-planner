import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseTotal = () => {
	const { costs } = useContext(AppContext);

	const total = costs.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='expense-box expense-total-box'>
			<span>Wydatki: {total}zł</span>
		</div>
	);
};

export default ExpenseTotal;
