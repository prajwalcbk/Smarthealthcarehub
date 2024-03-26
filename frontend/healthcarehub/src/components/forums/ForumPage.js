import React, { useState, useEffect } from 'react';
import './Forum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom'; // Import useParams to access URL parameters
import male_doctor from './../../assets/male_doctor.png'
import female_doctor from './../../assets/female_doctor.png'
import { useHistory, useNavigate } from 'react-router-dom';


const ForumPage = () => {
  const [Forum, setForum] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [ answer , setAnswer] = useState('');
  const [ answer_section , setAnswer_section] = useState(false);

  const { forumId } = useParams(); // Get the forumId from the URL parameter


    const fetchDataFromApi = async (url) => {
    const response = await axios.get(url);
    return response.data;
  };

  useEffect(() => 
  {
        const fetchForum = async () => {
            const data = await fetchDataFromApi(`/api/get/forum/${forumId}`);
            setForum(data[0]);
        };

        const fetchForumAnswers = async () => {
            const data = await fetchDataFromApi(`/api/get/forum/answers/${forumId}`);
            setAnswers(data);
        };
        fetchForum();
        fetchForumAnswers();
    }, [forumId]);






  const navigate = useNavigate();

  const handleAnswerClick = () => {
      setAnswer_section(!answer_section)
    };

  const handleSubmitClick = async () => {

        const data= {
          'answer': answer,
          'forum_id': forumId,
          'user_id' : 1,
          'user_firstname' : 'Admin'
        }
        const response = await axios.post(`/api/create/forum/answer` , data);

        const updatedAnswers = [data, ...answers];
        setAnswers(updatedAnswers);
        setAnswer('');
        setAnswer_section(false)  
  };
  
  return (
    <div className="forum-container">
      <Navbar />      
      <div className="forum-list">
        {Forum && (
          <div className="forum-card">
            <div className="left-section">
              <div style={{ paddingLeft: '20px' }}>
                <h2>{Forum.title} {Forum.user_id}</h2>
                <p>Category: {Forum.category}</p>
                <p className="description">{Forum.description}</p>
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
              <label> {answer.user_firstname} {answer.user_lastname}  </label>

              <p key={index}>{answer.answer}</p>
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
