import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentManagement.css';

function AppointmentManagement() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [reason, setReason] = useState('');

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
          <h2>Reason for Visit:</h2>
          <textarea
            rows="4"
            cols="50"
            value={reason}
            onChange={handleReasonChange}
            placeholder="Enter reason for visit"
          ></textarea>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit Appointment</button>
    </div>
  );
}

export default AppointmentManagement;
