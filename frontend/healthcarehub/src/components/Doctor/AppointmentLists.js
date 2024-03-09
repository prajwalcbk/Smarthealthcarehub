import React, { useState, useEffect } from 'react';
import './AppointmentList.css';
//import appointment from './appointmentDetails';

function AppointmentList() {
  const [appointmentList, setappointmentList] = useState([]);

  // Fetch appointment history data from an external source (e.g., API)
  useEffect(() => {
    const fetchappointments = async () => {
      // Simulated response from API
      const appointmentResponse = [
         { "id": 1, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "01:00" , "Duration" : "30 minutes" ,  "Patient": "Alice" ,  "Doctor":"John" , "status": "Active" },
        { "id": 2, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "02:00" , "Duration" : "30 minutes" ,  "Patient": "Bob" ,  "Doctor":"John" , "status": "Active" },
        { "id": 3, "Reason": "Typhoid", "Date": "25-01-2024" , "Time": "03:00" , "Duration" : "30 minutes" ,  "Patient": "Charlie" ,  "Doctor":"John" , "status": "Active" },
        { "id": 4, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "04:00" , "Duration" : "30 minutes" ,  "Patient": "David" ,  "Doctor":"John" , "status": "Active" },
        { "id": 5, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "05:00" , "Duration" : "30 minutes" ,  "Patient": "Emily" ,  "Doctor":"John" , "status": "Active" },
        { "id": 6, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "06:00" , "Duration" : "15 minutes" ,  "Patient": "Frank" ,  "Doctor":"John" , "status": "Active" },
        { "id": 7, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "07:00" , "Duration" : "30 minutes" ,  "Patient": "Grace" ,  "Doctor":"John" , "status": "Active" },
        { "id": 8, "Reason": "Typhoid", "Date": "25-01-2024" , "Time": "08:00" , "Duration" : "30 minutes" ,  "Patient": "Henry" ,  "Doctor":"John" , "status": "Active" }
    ];  
      setappointmentList(appointmentResponse);
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
                
                <td>{appointment.Date}</td>
                <td>{appointment.Time}</td>
                <td>{appointment.Duration}</td>
                <td>{appointment.Patient}</td>
                 <td>{appointment.Reason}</td>
                


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
