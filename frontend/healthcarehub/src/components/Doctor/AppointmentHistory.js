import React, { useState, useEffect } from 'react';
import './AppointmentList.css';

function AppointmentList() {
  const [appointmentList, setappointmentList] = useState([]);

  // Fetch appointment history data from an external source (e.g., API)
  useEffect(() => {
    const fetchappointments = async () => {
      // Simulated response from API
      const appointmentResponse = [
        { "id": 1, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "01:00" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Completed" },
        { "id": 3, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "02:00" , "Duration" : "30 minutes" ,  "Patient": "prajwal" ,  "Doctor":"Amith" , "status": "Active" },
        { "id": 2, "Reason": "Typhoid", "Date": "25-01-2024" , "Time": "03:00" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Completed" },
        { "id": 4, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "04:00" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Missed" },
        { "id": 5, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "05:00" , "Duration" : "30 minutes" ,  "Patient": "prajwal" ,  "Doctor":"Amith" , "status": "Cancelled" },
        { "id": 6, "Reason": "Due to Fever", "Date": "25-01-2024" , "Time": "06:00" , "Duration" : "15 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Completed" },
        { "id": 7, "Reason": "Due to Headache", "Date": "25-01-2024" , "Time": "07:00" , "Duration" : "30 minutes" ,  "Patient": "prajwal" ,  "Doctor":"Amith" , "status": "Cancelled" },
        { "id": 8, "Reason": "Typhoid", "Date": "25-01-2024" , "Time": "08:00" , "Duration" : "30 minutes" ,  "Patient": "Rahul" ,  "Doctor":"Amith" , "status": "Cancelled" },
      ];
      setappointmentList(appointmentResponse);
    };

    fetchappointments();
  }, []);


  return (
    <div className="appointment-list">
      <h2>Your Older Appointments</h2>
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
                
                <td style={{ "padding":"3%" }}>{appointment.Date}</td>
                <td style={{ "padding":"3%" }}>{appointment.Time}</td>
                <td style={{ "padding":"3%" }}>{appointment.Duration}</td>
                <td style={{ "padding":"3%" }}>{appointment.Patient}</td>
                 <td style={{ "padding":"3%" }}>{appointment.Reason}</td>
                
                <td>{appointment.status}</td>
                <td>
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
