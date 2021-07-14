import React, { useContext} from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';

const ExpenseList = () => {
	const { costs } = useContext(AppContext);

	return (
		<>

			<ul className='expense-list'>
				{costs.map((cost) => (
					<ExpenseItem
						id={cost.id}
						name={cost.name}
						cost={cost.cost}
					/>
				))}
			</ul>
		</>
	);
};

export default ExpenseList;
