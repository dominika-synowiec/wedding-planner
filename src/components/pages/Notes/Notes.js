import React from 'react';
import './Notes.scss';
import Footer from "../../Footer/Footer";
import TodoList from "./TodoList";
export default function Notes() {
    return(
        <>
            <div className='todo-app'>
                <TodoList />
            </div>
            <Footer/>
        </>
    )
}