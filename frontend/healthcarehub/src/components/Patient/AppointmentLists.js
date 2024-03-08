import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
import AppointmentManagement from './AppointmentManagement'
//import appointment from './appointmentDetails';

function AppointmentList() {
  const [appointmentList, setappointmentList] = useState([]);
  const [viewClicked, setViewClicked] = useState([]);

  // Fetch appointment history data from an external source (e.g., API)
  useEffect(() => {
    const fetchappointments = async () => {
      // Simulated response from API
      const appointmentResponse = [
       { "id": 1, "Reason": "Flu Symptoms", "Date": "27-01-2024" , "Time": "10:00" , "Duration" : "45 minutes" ,  "Patient": "John" ,  "Doctor":"Smith" , "status": "Active" },
        { "id": 3, "Reason": "Migraine", "Date": "27-01-2024" , "Time": "11:00" , "Duration" : "60 minutes" ,  "Patient": "Alice" ,  "Doctor":"Jones" , "status": "Active" },
        { "id": 2, "Reason": "Common Cold", "Date": "27-01-2024" , "Time": "12:00" , "Duration" : "30 minutes" ,  "Patient": "Bob" ,  "Doctor":"Davis" , "status": "Active" },
        { "id": 4, "Reason": "Stomach Flu", "Date": "27-01-2024" , "Time": "13:00" , "Duration" : "45 minutes" ,  "Patient": "Emma" ,  "Doctor":"Wilson" , "status": "Active" },
        { "id": 5, "Reason": "Tension Headache", "Date": "27-01-2024" , "Time": "14:00" , "Duration" : "60 minutes" ,  "Patient": "Michael" ,  "Doctor":"Brown" , "status": "Active" },
        { "id": 6, "Reason": "Seasonal Allergies", "Date": "27-01-2024" , "Time": "15:00" , "Duration" : "30 minutes" ,  "Patient": "Sophia" ,  "Doctor":"Miller" , "status": "Active" },
        { "id": 7, "Reason": "Sinus Infection", "Date": "27-01-2024" , "Time": "16:00" , "Duration" : "45 minutes" ,  "Patient": "Ethan" ,  "Doctor":"Taylor" , "status": "Active" },
        { "id": 8, "Reason": "Food Poisoning", "Date": "27-01-2024" , "Time": "17:00" , "Duration" : "60 minutes" ,  "Patient": "Olivia" ,  "Doctor":"Clark" , "status": "Active" }
    ];
      setappointmentList(appointmentResponse);
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
      <h2>Your Appointments</h2>
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
                
                <td>{appointment.Date}</td>
                <td>{appointment.Time}</td>
                <td>{appointment.Duration}</td>
                <td>{appointment.Doctor}</td>
                 <td>{appointment.Reason}</td>
                


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
                    reason={appointment.Reason}
                    duration={appointment.Duration}
                    Time={appointment.Time}
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
