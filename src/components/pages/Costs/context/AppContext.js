import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':

			return {
				...state,
				costs: [...state.costs, action.payload],
			};

		case 'ADD_ALL_EXPENSES':

			return {
				...state,
				costs: [...action.payload],
			};

		case 'SET_BUDGET':
			return {
				...state,
				budget: action.payload,
			};

		default:
			return state;
	}
};

const initialState = {
	budget: 10000,
	costs: []
	,
};

export const AppContext = createContext();

export const AppProvider = (props) => {

	const [state, dispatch] = useReducer(AppReducer, initialState);

	return (
		<AppContext.Provider
			value={{
				costs: state.costs,
				budget: state.budget,
				dispatch,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
