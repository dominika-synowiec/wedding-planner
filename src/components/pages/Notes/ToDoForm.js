import React, { useState } from 'react';

function TodoForm({addTodo}) {
    const [input, setInput] = useState( '');

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        addTodo({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <form onSubmit={handleSubmit} className='todo-form'>
                <>
                    <input
                        placeholder='Nowe zadanie'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        className='todo-input'
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Dodaj
                    </button>
                </>
        </form>
    );
}

export default TodoForm;