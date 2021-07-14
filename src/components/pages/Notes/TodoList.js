import React, { useState,useEffect } from 'react';
import TodoForm from './ToDoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/todos', {
            method: 'GET'
        })
            .then(resp => {
                if (resp.ok) {
                    return resp.json();
                }
                throw new Error('Błąd sieci');
            })

            .then(data => {
                console.log('todos', data);
                setTodos(data);

            })

            .catch(err => console.error('Err', err));
    }, []);

    const addTodo = todo => {

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
        console.log(...todos);

        fetch('http://localhost:3000/todos', {
            method:"POST",
            headers: {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(todo)
        })
        .then((res)=> res.json())
            .then((todos)=>{
                console.log(todos)
            })
    };

    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);

        fetch(`http://localhost:3000/todos/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                setTodos(todos.filter(todo => todo.id !== id));
            }
        })
    };

    return (
        <>
            <div className={"todo-body"}>
            <h1>Lista zadań do zrobienia</h1>

            <TodoForm addTodo={addTodo} />
            <Todo
                todos={todos}
                removeTodo={removeTodo}
            />
            </div>
        </>
    );
}

export default TodoList;