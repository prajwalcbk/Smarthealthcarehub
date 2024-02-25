import React, { useState, useEffect, useRef } from 'react';
import './analytics.css'; // Import CSS file for styling
import Chart from 'chart.js/auto'; // Import Chart.js
import Navbar from '../navbar/Navbar';

const Analytics = () => {
  // Sample data for patients and doctors (replace with actual data from backend)
  const patientsData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more patient data here
  ];

  const doctorsData = [
    { id: 1, name: 'Dr. Michael Johnson', specialty: 'Cardiology' },
    { id: 2, name: 'Dr. Sarah Lee', specialty: 'Pediatrics' },
    // Add more doctor data here
  ];

  // Sample data for daily appointments and prescriptions (replace with actual data from backend)
  const dailyData = {
    appointments: [5, 10, 15, 20, 25, 30, 35], // Example: appointments for each day
    prescriptions: [10, 15, 20, 25, 30, 35, 40], // Example: prescriptions for each day
  };

  // State variables to store patient and doctor counts
  const [patientCount, setPatientCount] = useState(patientsData.length);
  const [doctorCount, setDoctorCount] = useState(doctorsData.length);

  // State variables to store total and today's appointments and prescriptions
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [totalPrescriptions, setTotalPrescriptions] = useState(0);
  const [todayAppointments, setTodayAppointments] = useState(0);
  const [todayPrescriptions, setTodayPrescriptions] = useState(0);

  // State variable to store the selected number of days
  const [numberOfDays, setNumberOfDays] = useState(7);

  // Refs to store chart instances
  const appointmentsChartRef = useRef(null);
  const prescriptionsChartRef = useRef(null);

  useEffect(() => {
    // Calculate total appointments and prescriptions
    const totalAppointmentsCount = dailyData.appointments.reduce((acc, val) => acc + val, 0);
    const totalPrescriptionsCount = dailyData.prescriptions.reduce((acc, val) => acc + val, 0);
    setTotalAppointments(totalAppointmentsCount);
    setTotalPrescriptions(totalPrescriptionsCount);

    // Calculate today's appointments and prescriptions
    const todayAppointmentsCount = dailyData.appointments[new Date().getDay()]; // Assuming 0-indexed day
    const todayPrescriptionsCount = dailyData.prescriptions[new Date().getDay()]; // Assuming 0-indexed day
    setTodayAppointments(todayAppointmentsCount);
    setTodayPrescriptions(todayPrescriptionsCount);

    // Create a chart for daily appointments
    const appointmentsCtx = appointmentsChartRef.current.getContext('2d');
    const appointmentsChart = new Chart(appointmentsCtx, {
      type: 'line',
      data: {
        labels: Array.from({ length: numberOfDays }, (_, i) => `Day ${i + 1}`), // Dynamic labels based on number of days
        datasets: [{
          label: 'Appointments',
          data: dailyData.appointments.slice(0, numberOfDays),
          fill: false,
          borderColor: '#007bff', // Blue color
          tension: 0.1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Create a chart for daily prescriptions
    const prescriptionsCtx = prescriptionsChartRef.current.getContext('2d');
    const prescriptionsChart = new Chart(prescriptionsCtx, {
      type: 'line',
      data: {
        labels: Array.from({ length: numberOfDays }, (_, i) => `Day ${i + 1}`), // Dynamic labels based on number of days
        datasets: [{
          label: 'Prescriptions',
          data: dailyData.prescriptions.slice(0, numberOfDays),
          fill: false,
          borderColor: '#28a745', // Green color
          tension: 0.1,
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Cleanup function to destroy existing charts before creating new ones
    return () => {
      if (appointmentsChart) {
        appointmentsChart.destroy();
      }
      if (prescriptionsChart) {
        prescriptionsChart.destroy();
      }
    };
  }, [dailyData, numberOfDays]); // Run this effect whenever dailyData or numberOfDays changes

  // Function to handle change in number of days
  const handleNumberOfDaysChange = (event) => {
    setNumberOfDays(parseInt(event.target.value));
  };

  return (
    <div className='analytics-container'>
        <Navbar />
    <div className="app-container">
      <h1>SmartHealth Hub</h1>
      <div className="stats-container">
        <div className="patient-stats">
          <h2>Total Patients: {patientCount}</h2>
        </div>
        <div className="doctor-stats">
          <h2>Total Doctors: {doctorCount}</h2>
        </div>
      </div>
      <div className="appointment-stats">
        <h2>Appointments</h2>
        <p>Total Appointments: {totalAppointments}</p>
        <p>Today's Appointments: {todayAppointments}</p>
      </div>
      <div className="prescription-stats">
        <h2>Prescriptions</h2>
        <p>Total Prescriptions: {totalPrescriptions}</p>
        <p>Today's Prescriptions: {todayPrescriptions}</p>
      </div>
      <div className="days-selector">
        <label htmlFor="numberOfDays">Select Number of Days:</label>
        <select id="numberOfDays" value={numberOfDays} onChange={handleNumberOfDaysChange}>
          <option value={1}>1 Day</option>
          <option value={3}>3 Days</option>
          <option value={7}>7 Days</option>
        </select>
      </div>
      <div className="graphs-container">
        <div className="graph">
          <h2>Daily Appointments</h2>
          <canvas ref={appointmentsChartRef} id="appointmentsChart" width="400" height="200"></canvas>
        </div>
        <div className="graph">
          <h2>Daily Prescriptions</h2>
          <canvas ref={prescriptionsChartRef} id="prescriptionsChart" width="400" height="200"></canvas>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Analytics;