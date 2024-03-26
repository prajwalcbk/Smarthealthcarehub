import './DataOversight.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataBreachesComponent = () => {


  const [dataBreaches, setdataBreaches ]= useState([]);


  useEffect(() => {


    const fetchdataBreaches = async () => {


      const response = await axios.get('/api/get/support/issue/databreaches', { withCredentials: true });
      console.log(response);
      setdataBreaches(response.data)

    }
    fetchdataBreaches();
  }, []);

  return (
    <div className="dataoversight">
      <h2>Data Breaches</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Date</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {dataBreaches.map((breach, index) => (
            <tr key={index}>
              <td>{breach.id}</td>
              <td>{breach.description}</td>
              <td>{breach.created_at ? new Date(breach.created_at).toISOString().split('T')[0] : "Invalid Date"}</td>
              <td>{breach.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataBreachesComponent;
