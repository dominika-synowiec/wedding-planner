import React, { useState } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);
	return (
		<>
			<input
				type='number'
				className='budget-edit'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				className='budget-edit-btn'
				onClick={() => props.handleSaveClick(value)}
			>
				ZAPISZ
			</button>
		</>
	);
};

export default EditBudget;
