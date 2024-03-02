import React, { useState } from 'react';
import './SymptomChecker.css'
import Navbar from '../navbar/Navbar';


const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState([]);
  const [selectedSymptom, setSelectedSymptom] = useState('');
  const [potentialIssues, setPotentialIssues] = useState([]);

  // Dummy data for symptoms and potential issues (replace with actual data source)
 const symptomData = [
  'Headache',
  'Fever',
  'Cough',
  'Fatigue',
  'Sore throat',
  'Runny or stuffy nose',
  'Muscle or body aches',
  'Shortness of breath',
  'Loss of taste or smell',
  'Nausea',
  'Vomiting',
  'Diarrhea',
  'Abdominal pain',
  'Chest pain',
  'Joint pain',
  'Rash',
  'Swollen glands',
  'Dizziness',
  'Difficulty swallowing',
  'Blurred vision',
  'Increased thirst',
  'Frequent hunger',
  'Weakness',
  'Fainting',
  'Confusion',
];

  const issueData = {
  Headache: ['Migraine', 'Tension Headache'],
  Fever: ['Cold', 'Flu'],
  Cough: ['Common Cold', 'Bronchitis'],
  Fatigue: ['Anemia', 'Chronic Fatigue Syndrome'],
  'Sore throat': ['Strep throat', 'Common Cold'],
  'Runny or stuffy nose': ['Common Cold', 'Allergies'],
  'Muscle or body aches': ['Flu', 'COVID-19'],
  'Shortness of breath': ['Asthma', 'Pneumonia'],
  'Loss of taste or smell': ['COVID-19', 'Sinusitis'],
  Nausea: ['Food poisoning', 'Stomach flu'],
  Vomiting: ['Gastroenteritis', 'Food poisoning'],
  Diarrhea: ['Gastroenteritis', 'Food poisoning'],
  'Abdominal pain': ['Appendicitis', 'Gastroenteritis'],
  'Chest pain': ['Heart attack', 'Angina'],
  'Joint pain': ['Arthritis', 'Lupus'],
  Rash: ['Contact dermatitis', 'Eczema'],
  'Swollen glands': ['Mononucleosis', 'HIV/AIDS'],
  Dizziness: ['Vertigo', 'Inner ear infection'],
  'Difficulty swallowing': ['GERD', 'Throat infection'],
  'Blurred vision': ['Myopia', 'Diabetes'],
  'Increased thirst': ['Diabetes', 'Dehydration'],
  'Frequent hunger': ['Diabetes', 'Hyperthyroidism'],
  Weakness: ['Anemia', 'Hypothyroidism'],
  Fainting: ['Vasovagal syncope', 'Hypoglycemia'],
  Confusion: ['Heatstroke', 'Urinary tract infection']
};


  const handleSymptomChange = (e) => {
    setSelectedSymptom(e.target.value);
  };

  const handleAddSymptom = () => {
    if (selectedSymptom && !symptoms.includes(selectedSymptom)) {
      setSymptoms([...symptoms, selectedSymptom]);
      setSelectedSymptom('');
    }
  };

  const handleRemoveSymptom = (symptom) => {
    setSymptoms(symptoms.filter((s) => s !== symptom));
  };

  const checkSymptoms = () => {
    if (!selectedSymptom) {
    // Handle case when no symptom is selected
    console.error('No symptom selected');
    return;
  }
    // Dummy logic to simulate fetching potential issues based on symptoms
    console.log(selectedSymptom)
    setPotentialIssues(issueData[selectedSymptom]);
    console.log(selectedSymptom)
  };

  return (
    <div className="container">
    <Navbar />
    <div className="symptomchecker-container">
      <h1>Symptom Checker</h1>
      <div>
        <label htmlFor="symptom">Select a symptom:</label>
        <select id="symptom" value={selectedSymptom} onChange={handleSymptomChange}>
          <option value="">Select...</option>
          {symptomData.map((symptom, index) => (
            <option key={index} value={symptom}>
              {symptom}
            </option>
          ))}
        </select>
        <button onClick={handleAddSymptom}>Add Symptom</button>
      </div>
      <div className="added-symptoms-list">
        <h2>Symptoms Added:</h2> 
        <ul>
          {symptoms.map((symptom, index) => (
            <li key={index}>
              <button onClick={() => handleRemoveSymptom(symptom)} style={{ "width":"20%"}}>Remove </button>
                 {           } {symptom}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={checkSymptoms}>Check Symptoms</button>
      {potentialIssues.length > 0 && (
        <div>
          <h2>Potential Issues:</h2>
          <ul>
            {potentialIssues.map((issue, index) => (
              <li key={index}>{issue}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="disclaimer">
        **Disclaimer:** 
        <p>
        This is a tool for informational purposes only and should
        not be a substitute for professional medical advice. Always consult with
        a healthcare provider if you have any concerns about your health.
      </p>
      </div>
    </div>
    </div>
  );
};

export default SymptomChecker;
