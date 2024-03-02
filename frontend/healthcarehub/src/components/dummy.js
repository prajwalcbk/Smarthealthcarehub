import React, { useState } from 'react';
import './dummy.css'

const VitalSignsTracking = () => {
  const [vitalSigns, setVitalSigns] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);

  const handleAddVitalSigns = (newVitalSigns) => {
    setVitalSigns([...vitalSigns, newVitalSigns]);
  };

  const handleAddExerciseData = (newExerciseData) => {
    setExerciseData([...exerciseData, newExerciseData]);
  };

  return (
    <div>
      <h2>Vital Signs Tracking</h2>
      <VitalSignsForm onAddVitalSigns={handleAddVitalSigns} />
      <VitalSignsList vitalSigns={vitalSigns} />
      
      <h2>Exercise Tracking</h2>
      <ExerciseForm onAddExerciseData={handleAddExerciseData} />
      <ExerciseList exerciseData={exerciseData} />
    </div>
  );
};

const VitalSignsForm = ({ onAddVitalSigns }) => {
  const [bloodPressure, setBloodPressure] = useState('');
  const [heartRate, setHeartRate] = useState('');
  const [bloodSugar, setBloodSugar] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddVitalSigns({ bloodPressure, heartRate, bloodSugar });
    setBloodPressure('');
    setHeartRate('');
    setBloodSugar('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Blood Pressure"
        value={bloodPressure}
        onChange={(e) => setBloodPressure(e.target.value)}
      />
      <input
        type="text"
        placeholder="Heart Rate"
        value={heartRate}
        onChange={(e) => setHeartRate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Blood Sugar"
        value={bloodSugar}
        onChange={(e) => setBloodSugar(e.target.value)}
      />
      <button type="submit">Add Vital Signs</button>
    </form>
  );
};

const VitalSignsList = ({ vitalSigns }) => {
  return (
    <div>
      <h3>Vital Signs History</h3>
      <ul>
        {vitalSigns.map((signs, index) => (
          <li key={index}>
            Blood Pressure: {signs.bloodPressure}, Heart Rate: {signs.heartRate}, Blood Sugar: {signs.bloodSugar}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ExerciseForm = ({ onAddExerciseData }) => {
  const [workout, setWorkout] = useState('');
  const [duration, setDuration] = useState('');
  const [intensity, setIntensity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddExerciseData({ workout, duration, intensity });
    setWorkout('');
    setDuration('');
    setIntensity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Workout"
        value={workout}
        onChange={(e) => setWorkout(e.target.value)}
      />
      <input
        type="text"
        placeholder="Duration"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <input
        type="text"
        placeholder="Intensity"
        value={intensity}
        onChange={(e) => setIntensity(e.target.value)}
      />
      <button type="submit">Add Exercise Data</button>
    </form>
  );
};

const ExerciseList = ({ exerciseData }) => {
  return (
    <div>
      <h3>Exercise History</h3>
      <ul>
        {exerciseData.map((data, index) => (
          <li key={index}>
            Workout: {data.workout}, Duration: {data.duration}, Intensity: {data.intensity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VitalSignsTracking;
