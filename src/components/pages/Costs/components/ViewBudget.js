import React from 'react';

const ViewBudget = (props) => {
	return (
		<>
			<span>Budżet: {props.budget}zł</span>
			<button type='button' className='budget-btn' onClick={props.handleEditClick}>
				EDYTUJ
			</button>
		</>
	);
};

export default ViewBudget;
