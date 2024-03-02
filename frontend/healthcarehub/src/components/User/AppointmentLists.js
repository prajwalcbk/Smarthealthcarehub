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
        { "id": 1, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 3, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "prajwal" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 2, "Reason": "Typhoid", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 4, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 5, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "prajwal" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 6, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 7, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "prajwal" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 8, "Reason": "Typhoid", "Date": "25-01-2024" , "Time": "12:00 PM" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Active" },
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
