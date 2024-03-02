import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dummy.css';

const MedicationReminders = () => {
  const [medicationReminder, setMedicationReminder] = useState(null);

  useEffect(() => {
    // Check if the reminder has already been shown
    const reminderShown = sessionStorage.getItem('medicationReminderShown');
    if (!reminderShown) {
      // Fetch medication reminder when the component mounts
      fetchMedicationReminder();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // This effect runs only once when the component mounts

  const fetchMedicationReminder = async () => {
    try {
      //const response = await axios.get('/api/medication-reminder');
      const response={"name":"DOLO  50" , "dosage":1}
      setMedicationReminder(response);
      // Store that the reminder has been shown
      sessionStorage.setItem('medicationReminderShown', 'true');
    } catch (error) {
      console.error('Error fetching medication reminder:', error);
    }
  };

  const handleNotificationClose = () => {
    // Close the notification and clear the medication reminder
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
          Dosage : {medicationReminder.dosage}
          <button onClick={handleNotificationClose}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicationReminders;
