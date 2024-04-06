import React, { useState, useEffect } from 'react';
import AppointmentManagement from './AppointmentManagement'
import axios from 'axios';

function AppointmentList() {
  const [appointmentList, setappointmentList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);
  const token = localStorage.getItem('token');

  // Fetch appointment history data from an external source (e.g., API)
  useEffect(() => {
    const fetchappointments = async () => {
      
      const response = await axios.get(`/api/get/user/appointments`, {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          }); 

      setappointmentList(response.data);
    };

    fetchappointments();
  }, []);

  const handleViewClick = (id) => {
    setViewClicked(prevClicked => ({
      ...prevClicked,
      [id]: !prevClicked[id]
    }));
  };

  return (
    <div className="appointment-list">
      <h2 className="appointment-heading">Your Appointments</h2>
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
                <td>{appointment.doctor_firstname} {appointment.doctor_lastname} </td>
                 <td>{appointment.reason} </td>
                <td>{appointment.status}</td>
                <td>
                  {viewClicked[appointment.id] && <button onClick={() => handleViewClick(appointment.id)}>Close</button>}
                  {!viewClicked[appointment.id] && <button onClick={() => handleViewClick(appointment.id)}>Edit</button>}
                </td>
              </tr>
              {viewClicked[appointment.id] && (
                <tr>
                  <td colSpan="7">
                    <AppointmentManagement 
                    reason={appointment.reason}
                    duration={appointment.duration}
                    Time={appointment.time}
                    Date='Fri Mar 08 2024 00:00:00 GMT+0530 (India Standard Time)'
                    id={appointment.id}

                    />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AppointmentList;
