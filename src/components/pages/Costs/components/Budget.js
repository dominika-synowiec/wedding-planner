import React, { useState, useContext } from 'react';
import ViewBudget from './ViewBudget';
import EditBudget from './EditBudget';
import { AppContext } from '../context/AppContext';
import './../Costs.scss'
const Budget = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div className='budget-box, expense-box'>
			{isEditing ? (
				<EditBudget  handleSaveClick={handleSaveClick} budget={budget} />
			) : (

				<ViewBudget className='budget-edit' handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;
