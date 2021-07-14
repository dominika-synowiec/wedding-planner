import React from 'react';
import {useState} from "react";
import '../../App.scss';
import './HeroSection.scss';

function HeroSection() {

    const [date, setDate] = useState();
    const [counter, setCounter] = useState();


    const handleClick = () =>{
        const moment = require('moment');
        moment(date).format("YYYY-MMMM-dddd");
        setCounter(()=>moment(date).fromNow(true))
    }
    console.log(date)
    console.log(counter)
    return (
        <div className='hero-container'>
            <h1>NOTATNIK WESELNY</h1>
            <p>Ile zostało do ślubu?</p>
            <div className='hero-section'>
                <input
                    className='hero-input'
                    name='date'
                    type='date'
                    placeholder='Data Waszego ślubu'
                    value={date}
                    onChange={e=>setDate(e.target.value)}
                />
                <button
                    className='hero-btn'
                    type={'submit'}
                    onClick={handleClick}
                >
                    ZAPISZ
                </button>
                <div className='hero-counter'>{counter}</div>
            </div>
        </div>
    );
}

export default HeroSection;