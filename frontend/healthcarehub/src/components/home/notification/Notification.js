import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './notification.css';

const MedicationReminders = ({user}) => {
  const [medicationReminder, setMedicationReminder] = useState(null);

  //medication reminders 
  //user_id 
  //prescription_details_id
  //updated_at
  //24 / 7-10 13-16 19-22
  useEffect(() => {

    const reminderShown = sessionStorage.getItem('medicationReminderShown');
    if (!reminderShown) {
      fetchMedicationReminder();
    }

  }, []); 

  const fetchMedicationReminder = async () => {
    try {

      const response={"name":"DOLO  50" , "dosage":1}
      setMedicationReminder(response);
      sessionStorage.setItem('medicationReminderShown', 'true');
    } catch (error) {
      console.error('Error fetching medication reminder:', error);
    }
  };

  const handleNotificationClose = () => {
    setMedicationReminder(null);
  };

  return (
    <div className="notification-container">
      {medicationReminder && (
        <div className="notification">
        <h2> Medication Reminders </h2>
        <div className="notification-content">

          <h3> It's time to take your medication </h3>

          <p>Name : {medicationReminder.name}  </p>
          <p> Dosage : {medicationReminder.dosage} </p>
          <button onClick={handleNotificationClose}>OK got it</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationReminders;
