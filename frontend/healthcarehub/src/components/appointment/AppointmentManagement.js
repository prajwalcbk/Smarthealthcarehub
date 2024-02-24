import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentManagement.css';

function AppointmentManagement() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reason, setReason] = useState('');
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [duration , setDuration] = useState(15);

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSubmit = () => {
    // Your logic to handle the appointment submission
    console.log('Appointment Date:', selectedDate);
    console.log('Reason for Visit:', reason);
    // Add logic to submit appointment to the backend or perform other actions
  };

  return (
    <div className="appointment-management">
      <div className="appointment-management-container">
        <div className="calendar-container">
          <h2>Select Appointment Date:</h2>
          <Calendar className="Calendar" onChange={handleDateChange} value={selectedDate} />
        </div>

        <div className="reason-container">

        <h2>Duration:</h2>
        <select className="duration-select"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
          <option value="15">15 minutes</option>
          <option value="30">30 minutes</option>
          <option value="60">60 minutes</option>
        </select>

        <h2>Time:</h2>
          <input
          type="time"
          value={selectedTime}
          onChange={handleTimeChange}
        />

          <h2>Reason for Visit:</h2>
          <textarea
            rows="6"
            cols="50"
            value={reason}
            onChange={handleReasonChange}
            placeholder=" "
          ></textarea>
        </div>
      </div>
      <button className="confirm-appointment" onClick={handleSubmit}>Confirm Appointment</button>
    </div>
  );
}

export default AppointmentManagement;
