import React, { useState, useEffect } from 'react';
import './Forum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import male_doctor from './../../assets/male_doctor.png'
import female_doctor from './../../assets/female_doctor.png'
import { useHistory, useNavigate } from 'react-router-dom';


const ForumPage = () => {
  const [forumData, setForumData] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [ answer , setAnswer] = useState('');
  const [ answer_section , setAnswer_section] = useState(false);

  const { forumId } = useParams(); // Get the forumId from the URL parameter
  console.log("***Forumid**")
  console.log(forumId);
  console.log("***Forumid**")

  useEffect(() => {

    const fetchAnswers = async () => {
      try {
        // const response = await fetch(`http://localhost:3000/api/forum/${forumId}/answers`); // Fetch answers for the forum
        // if (!response.ok) {
        //   throw new Error('Failed to fetch answers');
        // }
        // const data = await response.json();
        const dummyForumsData = [ { id:1 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} ,{ id:2 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} , { id:3 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} ,  { id:4 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} , { id:5 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body","gender":"female","name":"Prajwal A" , date:"11/02/2024"} ];
        const data=dummyForumsData;
        setAnswers(data);
      } catch (error) {
        console.error('Error fetching answers:', error);
      }
    };


    const fetchForumData = async () => {
      try {
        // const response = await fetch(`http://localhost:3000/api/forum/${forumId}`); // Use forumId from URL parameter
        // if (!response.ok) {
        //   throw new Error('Failed to fetch data');
        // }
        const dummyForumsData = [
        { id: 1, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 2, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 3, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 4, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 5, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 6, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 7, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 8, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 9, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 10, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 11, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 12, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 13, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 14, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
        { id: 15, title: 'Diet Plan', category: 'c1', Description: 'ou are what you eat. Right from the start, we are always taught about eating right. Every mother ensures that their kids are fed in a way that they receive proper nutrition for adequate growth. A balanced diet contains fruits, vegetables, nuts, pulses, milk, etc., to ensure the body gets enough protein, carbohydrates, fats, minerals, vitamins, and fibre. Whether a vegetarian or non-vegetarian, you can easily put together a meal that provides nourishment to the body.', Date_posted: '01/01/2000', created_user_id: '1'},
            // Add more dummy data as needed
          ];
        // const data = await response.json();

        const data = dummyForumsData.find(forum => forum.id == forumId);
        console.log("***Data**")
        console.log(data)
        setForumData(data);
      } catch (error) {
        console.error('Error fetching forum data:', error);
      }
    };
    fetchForumData();
    fetchAnswers();
  }, [forumId]); // Add forumId to the dependency array

  const navigate = useNavigate();

  const handleAnswerClick = () => {
      setAnswer_section(!answer_section)
    };

  const handleSubmitClick = () => {
    
    };
  
  return (
    <div className="forum-container">
      <Navbar />      
      <div className="forum-list">
        {forumData && (
          <div className="forum-card">
            <div className="left-section">
              <div style={{ paddingLeft: '20px' }}>
                <h2>{forumData.title}</h2>
                <p>Category: {forumData.category}</p>
                <p className="description">{forumData.Description}</p>
              </div>
            </div>
          </div>
        )}
        <div className="answers-container">
        {!answer_section && <button onClick={handleAnswerClick} style={{ "width":"25%"}} > Answer </button>}
        
        
        {(
            answer_section
          ) && ( 
        <div className="answer-section">
        <div className="form-group">
        <h2> Your Answer </h2>
        
        
          <textarea
            id="answer"
            value={answer}
            onChange={e => setAnswer(e.target.value)}
            rows={8} 
          />
          <button onClick={handleAnswerClick} style={{ "width":"25%"}} > Close </button>
          <button onClick={handleSubmitClick} style={{ "width":"25%"}} > Submit </button>
        </div>
        </div>
        )}
        
          <h2>Answers:</h2>
          <ul>
            {answers.map((answer, index) => (
              <div className="answer">
              <img src={answer.gender === 'male' ? male_doctor : female_doctor} alt="Doctor icon" className="profile-pic" style={{ width: '50px', height: '50px' }} />
              <label> {answer.name}</label>

              <p key={index}>{answer.message}</p>
              <p> {answer.date}</p>
              </div>

            ))}
          </ul>
        </div>
      </div> 
    </div>
  );
};

export default ForumPage;
