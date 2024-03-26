import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './DataOversight.css'

const SystemMalfunctionsComponent = () => {


  const [ systemMalfunctions ,setsystemMalfunctions ]  = useState([]);

  useEffect(() => {


    const fetchdata = async () => {


      const response = await axios.get('/api/get/support/issue/systemMalfunctions', { withCredentials: true });
      console.log(response);
      setsystemMalfunctions(response.data)

    }
    fetchdata();
  }, []);



  return (
    <div className="dataoversight">
      <h2>System Malfunctions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {systemMalfunctions.map((malfunction, index) => (
            <tr key={index}>
              <td>{malfunction.id}</td>
              <td>{malfunction.description}</td>
              <td>{malfunction.created_at ? new Date(malfunction.created_at).toISOString().split('T')[0] : "Invalid Date"}</td>
              <td>{malfunction.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SystemMalfunctionsComponent;
