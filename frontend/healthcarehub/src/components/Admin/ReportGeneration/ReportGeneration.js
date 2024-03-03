import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import './ReportGeneration.css'

const ReportGeneration = () => {
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState(null);
  const [showDownloadCSV, setShowDownloadCSV] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  const handleGenerateReport = (reportype) => {
    setReportType(reportype);
    // Implement logic to fetch data based on the selected report type
    // This is a placeholder example, replace with your actual data fetching logic
    let data;
    switch (reportype) {
      case 'users-list':
        data = {
          users: [
            { username: 'JohnDoe', email: 'john@example.com', status: 'Active', createdDate: '2022-03-01', lastLogin: '2022-03-10' },
            { username: 'JaneSmith', email: 'jane@example.com', status: 'Inactive', createdDate: '2022-03-05', lastLogin: '2022-03-08' }
          ]
        };
        break;
      case 'doctors-list':
        data = {
          doctors: [
            { username: 'DrJohn', email: 'drjohn@example.com', role: 'General Practitioner', status: 'Active', createdDate: '2022-03-01' },
            { username: 'DrJane', email: 'drjane@example.com', role: 'Pediatrician', status: 'Active', createdDate: '2022-03-05' }
          ]
        };
        break;
      case 'appointments':
        data = {
          appointments: [
            { date: '2022-03-10', time: '10:00 AM', duration: '1 hour', with: 'DrJohn', reason: 'Checkup', status: 'Confirmed' },
            { date: '2022-03-12', time: '11:00 AM', duration: '45 minutes', with: 'DrJane', reason: 'Consultation', status: 'Pending' }
          ]
        };
        break;
      case 'system-performance':
        data = {
          performance: {
            activeUsers: 100,
            concurrentConnections: 50,
            resourceRequests: 200,
            resourceQueueLength: 10
          }
        };
        break;
      default:
        data = null;
    }
    setReportData(data);
    setShowDownloadCSV(true);
    setSuccessMessage("Report Generated Succefully !")
  };

  const csvData = () => {
    // Convert reportData to CSV format
    if (!reportData) return [];
    let csvContent = [];
    switch (reportType) {
      case 'users-list':
        csvContent = reportData.users.map(user => ({
          Username: user.username,
          Email: user.email,
          Status: user.status,
          'Created Date': user.createdDate,
          'Last Login': user.lastLogin
        }));
        break;
      case 'doctors-list':
        csvContent = reportData.doctors.map(doctor => ({
          Username: doctor.username,
          Email: doctor.email,
          Role: doctor.role,
          Status: doctor.status,
          'Created Date': doctor.createdDate
        }));
        break;
      case 'appointments':
        csvContent = reportData.appointments.map(appointment => ({
          Date: appointment.date,
          Time: appointment.time,
          Duration: appointment.duration,
          With: appointment.with,
          Reason: appointment.reason,
          Status: appointment.status
        }));
        break;
      case 'system-performance':
        csvContent = [{
          'Active Users': reportData.performance.activeUsers,
          'Concurrent Connections': reportData.performance.concurrentConnections,
          'Resource Requests': reportData.performance.resourceRequests,
          'Resource Queue Length': reportData.performance.resourceQueueLength
        }];
        break;
      default:
        csvContent = [];
    }
    return csvContent;
  };

return (
    <div className="report-generation">
      <h2>Reports</h2>
      <ul>
        <li>
          <label>List of Users</label>
          <button onClick={() => handleGenerateReport('users-list')}>Generate Report</button>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div>{successMessage && reportType === 'users-list' &&  <p className="success-message">{successMessage}</p>}</div>
          {showDownloadCSV && reportType === 'users-list' && (
            <CSVLink data={csvData()} filename="users-list.csv">
              Download CSV
            </CSVLink>
          )}
        </li>
        <li>
          <label>List of Doctors</label>
          <button onClick={() => handleGenerateReport('doctors-list')}>Generate Report</button>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div>{successMessage && reportType === 'doctors-list' && <p className="success-message">{successMessage}</p>}</div>
          {showDownloadCSV && reportType === 'doctors-list' && (
            <CSVLink data={csvData()} filename="doctors-list.csv">
              Download CSV
            </CSVLink>
          )}
        </li>
        <li>
          <label>Appointments</label>
          <button onClick={() => handleGenerateReport('appointments')}>Generate Report</button>
        <div>{error && reportType === 'appointments' &&  <p className="error-message">{error}</p>}</div>
        <div>{successMessage && reportType === 'appointments' &&  <p className="success-message">{successMessage}</p>}</div>
          {showDownloadCSV && reportType === 'appointments' && (
            <CSVLink data={csvData()} filename="appointments.csv">
              Download CSV
            </CSVLink>
          )}
        </li>
        <li>
          <label>System Performance</label>
          <button onClick={() => handleGenerateReport('system-performance')}>Generate Report</button>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div>{successMessage && reportType === 'system-performance' && <p className="success-message">{successMessage}</p>}</div>
          {showDownloadCSV && reportType === 'system-performance' && (
            <CSVLink data={csvData()} filename="system-performance.csv">
              Download CSV
            </CSVLink>
          )}
        </li>
      </ul>
    </div>
  );
};

export default ReportGeneration;
