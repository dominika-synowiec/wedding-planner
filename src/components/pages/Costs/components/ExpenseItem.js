import React from 'react';
import './../Costs.scss'

const ExpenseItem = (props) => {

	return (
		<li className='expense-list-item'>
			{props.name}
			<div className='cost-list-value'>
				<span className='cost-value'>{props.cost}zł</span>
			</div>
		</li>
	);
};

export default ExpenseItem;
