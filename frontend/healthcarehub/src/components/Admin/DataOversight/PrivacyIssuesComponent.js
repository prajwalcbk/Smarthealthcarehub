import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './DataOversight.css'

const PrivacyIssuesComponent = () => {

    const [privacyIssues, setprivacyIssues ]= useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {


    const fetchdata = async () => {


      const response = await axios.get('/api/get/support/privacy_issues',  {
            headers: {
              'Authorization': `Bearer ${token}`
            },
            timeout: 2000 // Set timeout to 2 seconds
          });
      console.log(response);
      setprivacyIssues(response.data)

    }
    fetchdata();
  }, []);




  return (
    <div className="dataoversight">
      <h2>Privacy Issues</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {privacyIssues.map((issue, index) => (
            <tr key={index}>
              <td>{issue.id}</td>
              <td>{issue.description}</td>
              <td>{issue.created_at ? new Date(issue.created_at).toISOString().split('T')[0] : "Invalid Date"}</td>
              <td>{issue.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default PrivacyIssuesComponent;
