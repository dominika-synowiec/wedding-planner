import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const RemainingBudget = () => {
	const { costs, budget } = useContext(AppContext);

	const totalExpenses = costs.reduce((total, item) => {
		return (total += item.cost);
	}, 0);

	return (
		<div className='expense-box remaining-box'>
			<span>Pozostało: {budget - totalExpenses}zł</span>
		</div>
	);
};

export default RemainingBudget;
