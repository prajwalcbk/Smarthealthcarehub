import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import axios from 'axios';

function AppointmentList() {
  const [appointmentList, setappointmentList] = useState([]);
  const token = localStorage.getItem('token');

  // Fetch appointment history data from an external source (e.g., API)
  useEffect(() => {
    const fetchappointments = async () => {
      // Simulated response from API
      const response = await axios.get(`/api/get/doctor/upcoming/appointments`, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
      setappointmentList(response.data);
    };

    fetchappointments();
  }, []);

  const handleCancelAppointmentClick = (id) => {
    const updatedAppointments = appointmentList.filter(appointment => appointment.id !== id);
    setappointmentList(updatedAppointments);
  };

  return (
    <div className="appointment-list">
      <h2 className="appointment-heading">Your Upcoming Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Duration </th>
            <th>With</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appointmentList.map((appointment) => (
            <React.Fragment key={appointment.id}>
              <tr>
                
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.duration}</td>
                <td>{appointment.patient_firstname} {appointment.patient_lastname}</td>
                 <td>{appointment.reason}</td>
                


                <td>{appointment.status}</td>
                <td>
                  <button onClick={() => handleCancelAppointmentClick(appointment.id)}>Cancel</button>
                </td>
              </tr>

            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
