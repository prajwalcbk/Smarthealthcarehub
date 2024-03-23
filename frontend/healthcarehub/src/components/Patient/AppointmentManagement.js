import React, { useState } from 'react';
import Navbar from '../navbar/Navbar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AppointmentManagement.css';

function AppointmentManagement(props) {
  const [selectedDate, setSelectedDate] = useState(props.Date);
  const [id, setId] = useState(props.id);
  const [reason, setReason] = useState(props.reason);
  const [selectedTime, setSelectedTime] = useState(props.Time);
  const [duration , setDuration] = useState(props.duration);

  console.log(selectedTime)
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleSave = () => {
    // Your logic to handle the appointment submission
    console.log('Appointment Date:', selectedDate);
    console.log('Reason for Visit:', reason);
    // Add logic to submit appointment to the backend or perform other actions
  };

    const handleCancel = () => {
  };


  return (
    <div className="user-appointment-management">
      <div className="user-appointment-management-container">
        <div className="user-calendar-container">
          <h2>Select Appointment Date:</h2>
          <Calendar className="user-Calendar" onChange={handleDateChange} value={selectedDate} />
        </div>

        <div className="user-reason-container">

        <h2>Duration:</h2>
        <select className="user-duration-select"
            value={duration}
            onChange={e => setDuration(e.target.value)}
          >
          <option value="15 minutes">15 minutes</option>
          <option value="30 minutes">30 minutes</option>
          <option value="60 minutes">60 minutes</option>
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
          <br />
                  <button className="user-confirm-appointment" onClick={handleSave} style={{"margin" : "2%" }} >Save</button>
        <button className="user-confirm-appointment" onClick={handleCancel} style={{"margin" : "2%" }} >Cancel Appointment</button>
        </div>
      </div>
    </div>
  );
}

export default AppointmentManagement;
