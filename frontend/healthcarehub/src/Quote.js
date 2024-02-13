import React from 'react';
import './Quote.css';
import calender from './assets/Calender.svg';
import sethoscope from'./assets/stethoscope.svg'

const Quote = () => {

    return (
        <div className='quote-container'>
        <h1 className='heading'>Protect Your Life And Take Care Of Your Health</h1>
        <div className='content-wrapper'>
            <div className='box border'>
            <img src={calender}/>
                <h2>Book an Appointment</h2>
                <p>Book an appointment with a doctor to discuss health concerns and receive treatment.</p>
            </div>
            <div className='box border1'>
            <img src={sethoscope}/>
                <h2>Track your medical records</h2>
                <p>Your medical records are managed in a digital format and shared only with authorized healthcare with your consent.</p>
            </div>
        </div>
    </div>
        
    )
}


export default Quote;