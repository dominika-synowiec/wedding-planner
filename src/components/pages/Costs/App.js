import React from 'react';
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AddExpenseForm from './components/AddExpenseForm';
import RemainingBudget from './components/Remaining';

const App = () => {
	return (
		<AppProvider>
			<div className='costs-container'>
				<h1 className='cost-header'>Nasz budżet ślubny</h1>
				<div className='cost-boxes'>
					<div>
						<Budget />
					</div>
					<div>
						<RemainingBudget />
					</div>
					<div>
						<ExpenseTotal />
					</div>
				</div>
				<h3 className='all-costs'>Koszty</h3>
				<div>
					<div>
						<ExpenseList />
					</div>
				</div>
				<h4 className='add-cost'>Dodaj koszt</h4>
				<div>
					<div>
						<AddExpenseForm />
					</div>
				</div>
			</div>
		</AppProvider>
	);
};

export default App;
