import React, { useState, useEffect } from 'react';
import './AnalyticsDashboard.css'; // Import CSS file for styling
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar } from 'recharts'; // Import recharts for chart components

function AnalyticsDashboard() {
  // State for analytics data
  const [analyticsData, setAnalyticsData] = useState([]);

  useEffect(() => {
    fetchAnalyticsData(); // Fetch analytics data from API on component mount
  }, []);

  // Fetch analytics data from API
  const fetchAnalyticsData = async () => {
    try {
      // Fetch analytics data from API
      // const response = await axios.get('https://api.smarthealthhub.com/analytics');
      // setAnalyticsData(response.data);
      // For now, using static data as an example
      setAnalyticsData([
        { date: '2024-02-01', patientCount: 150, appointmentCount: 120, revenue: 5000 },
        { date: '2024-02-02', patientCount: 160, appointmentCount: 130, revenue: 5200 },
        { date: '2024-02-03', patientCount: 170, appointmentCount: 140, revenue: 5400 },
        // Add more data points as needed
      ]);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      // Handle error fetching data
    }
  };

  // Calculate total appointments
  const totalAppointments = analyticsData.reduce((total, dataPoint) => total + dataPoint.appointmentCount, 0);

  // Calculate total patients
  const totalPatients = analyticsData.reduce((total, dataPoint) => total + dataPoint.patientCount, 0);

   const symptomsData = [
    { symptom: 'Fever', count: 25 },
    { symptom: 'Cough', count: 30 },
    { symptom: 'Headache', count: 15 },
    { symptom: 'Fatigue', count: 20 },
    { symptom: 'Muscle pain', count: 10 },
  ];

  const [isMobile, setIsMobile] = useState(false);


   useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 600; // You can adjust the threshold as needed
      console.log(isMobile ? 'Mobile view' : 'Desktop view');
      setIsMobile(isMobile);
    };

    // Initial check
    handleResize();
  }, []);

  return (
    <div className='analytics-container'>
    <div className="analytics-dashboard-container">
      <h1>Analytics Dashboard</h1>
      <div className="analytics-summary">
        <div> <h3> Total Appointments: {totalAppointments} </h3> </div>
        <div> <h3> Total Patients: {totalPatients} </h3> </div>
      </div>
      <div className="analytics-charts">
        <h2>Patients Over Time</h2>
        <LineChart width={isMobile ? 350 : 600} height={isMobile ? 200 : 300} data={analyticsData} className="recharts-wrapper">
          {/* X-axis */}
          <XAxis dataKey="date" />
          {/* Y-axis */}
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {/* Tooltip */}
          <Tooltip />
          {/* Legend */}
          <Legend />
          {/* Line chart */}
          <Line type="monotone" dataKey="patientCount" stroke="#8884d8" />
        </LineChart>

        <h2>Appointments Over Time</h2>
        <BarChart width={isMobile ? 350 : 600} height={isMobile ? 200 : 300}  data={analyticsData} className="recharts-wrapper">
          {/* X-axis */}
          <XAxis dataKey="date" />
          {/* Y-axis */}
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {/* Tooltip */}
          <Tooltip />
          {/* Legend */}
          <Legend />
          {/* Bar chart */}
          <Bar dataKey="appointmentCount" fill="#82ca9d" />
        </BarChart>

        <h2>Revenue Over Time</h2>
        <LineChart width={isMobile ? 350 : 600} height={isMobile ? 200 : 300} data={analyticsData} className="recharts-wrapper">
          {/* X-axis */}
          <XAxis dataKey="date" />
          {/* Y-axis */}
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          {/* Tooltip */}
          <Tooltip />
          {/* Legend */}
          <Legend />
          {/* Line chart */}
          <Line type="monotone" dataKey="revenue" stroke="#ffc658" />
        </LineChart>

        <h2>Last Week Symptoms Analytics</h2>
          <div className="symptoms-analytics"   style={{"margin-bottom": "10%"}}>
          <table className="symptoms-table" >
            <thead>
              <tr>
                <th>Symptom</th>
                <th>Total Count</th>
              </tr>
            </thead>
            <tbody>
              {symptomsData.map((symptom, index) => (
                <tr key={index}>
                  <td>{symptom.symptom}</td>
                  <td>{symptom.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
      </div>
    </div>
    </div>
  );
}

export default AnalyticsDashboard;
