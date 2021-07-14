import React, {useContext, useEffect, useState} from 'react';
import {AppContext} from '../context/AppContext';


const AddExpenseForm = (props) => {
        const {dispatch} = useContext(AppContext);
        const [name, setName] = useState('');
        const [cost, setCost] = useState('');
        const [costs, setCosts] = useState([])

        useEffect(() => {
            fetch('http://localhost:3000/costs', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                },

            })
                .then((res) => res.json())
                .then((costs => {
                        console.log(costs)


                        dispatch({
                            type: 'ADD_ALL_EXPENSES',
                            payload: costs,
                        });
                    })
                )

        }, [])


        const onSubmit = (event) => {
            event.preventDefault();
            const costs = {
                name,
                cost: parseInt(cost),
            };

            dispatch({
                type: 'ADD_EXPENSE',
                payload: costs,
            });

            fetch('http://localhost:3000/costs', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(costs),

            })
                .then((res) => res.json())
                .then((data) => {
                    setCosts(data.result)
                    console.log(costs)
                })

            setName('');
            setCost('');
        };

        return (
            <>
                <form onSubmit={onSubmit}>
                    <div className='cost-form'>
                        <div className='cost-section'>
                            <label for='name'>Nazwa</label>
                            <input
                                required='required'
                                type='text'
                                className='input-name'
                                id='name'
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className='cost-section'>
                            <label for='cost'>Koszt</label>
                            <input
                                required='required'
                                type='number'
                                className='input-cost'
                                id='cost'
                                value={cost}
                                onChange={(event) => setCost(event.target.value)}
                            />
                        </div>
                        <div className='btn-submit'>
                            <div>
                                <button type='submit'>
                                    ZAPISZ
                                </button>
                            </div>
                        </div>
                    </div>

                </form>
            </>
        );
    }
;

export default AddExpenseForm;
