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
        const dummyForumsData = [ { id:1 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} ,{ id:2 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} , { id:3 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} ,  { id:4 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body"  , name: "Amith" , gender:"male" , date:"25/01/2024"} , { id:5 , forumId:1 , message:"This is an answer vegetarian, you can easily put together a meal that provides nourishment to the body","gender":"female","name":"John" , date:"11/02/2024"} ];
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
          { "id": 1, "title": "Healthy Eating Guide", "category": "Diet", "Description": "A comprehensive guide to healthy eating. Learn about the benefits of incorporating fruits, vegetables, whole grains, and lean proteins into your diet. Discover delicious and nutritious recipes to fuel your body and support your overall well-being.", "Date_posted": "01/01/2000", "created_user_id": "1" },
          { "id": 2, "title": "Effective Workout Routine", "category": "Exercise", "Description": "Transform your fitness journey with this effective workout routine. From cardio to strength training, this plan covers all the essentials for building strength, endurance, and flexibility. Get ready to sweat and see results with consistent effort.", "Date_posted": "05/02/2000", "created_user_id": "2" },
          { "id": 3, "title": "Top Health Tips", "category": "Health", "Description": "Discover top health tips for living your best life. From staying hydrated to getting enough sleep, these simple yet powerful tips can help you feel your best every day. Take charge of your health and start implementing these tips today.", "Date_posted": "01/11/2000", "created_user_id": "8" },
          { "id": 4, "title": "Mindfulness Meditation Guide", "category": "Mental Health", "Description": "Explore the benefits of mindfulness meditation for improving mental well-being. Learn techniques for staying present and reducing stress in your daily life. Cultivate inner peace and emotional resilience with regular practice.", "Date_posted": "11/01/2000", "created_user_id": "11" },
          { "id": 5, "title": "Better Sleep Strategies", "category": "Sleep", "Description": "Upgrade your sleep with these better sleep strategies. From creating a relaxing bedtime routine to optimizing your sleep environment, these tips will help you achieve restful and rejuvenating sleep every night. Wake up feeling refreshed and ready to tackle the day.", "Date_posted": "01/01/2002", "created_user_id": "10" },
          { "id": 6, "title": "Healthy Weight Loss Plan", "category": "Weight loss", "Description": "Embark on a journey to a healthier you with this comprehensive weight loss plan. Discover practical strategies for managing portion sizes, making healthier food choices, and incorporating regular exercise into your routine. Achieve your weight loss goals and improve your overall health.", "Date_posted": "01/01/2010", "created_user_id": "11" },
          { "id": 7, "title": "Heart-Healthy Habits", "category": "Heart health", "Description": "Adopt heart-healthy habits to protect your cardiovascular health. Learn about the importance of exercise, maintaining a healthy diet, managing stress, and avoiding tobacco. Take proactive steps to reduce your risk of heart disease and live a longer, healthier life.", "Date_posted": "01/01/2012", "created_user_id": "13" },
          { "id": 8, "title": "Superfoods for Vibrant Health", "category": "Diet", "Description": "Discover the power of superfoods for vibrant health. From antioxidant-rich berries to omega-3-packed fish, these nutrient-dense foods can support your immune system, boost energy levels, and promote overall well-being. Incorporate these superfoods into your diet for optimal health.", "Date_posted": "11/11/2000", "created_user_id": "14" },
          { "id": 9, "title": "High-Intensity Interval Training (HIIT) Plan", "category": "Exercise", "Description": "Maximize your workout efficiency with this high-intensity interval training (HIIT) plan. Burn calories, build muscle, and improve cardiovascular health with short bursts of intense exercise followed by brief recovery periods. Get ready to push your limits and achieve results.", "Date_posted": "01/11/2000", "created_user_id": "21" },
          { "id": 10, "title": "Nutrition Essentials", "category": "Health", "Description": "Unlock the secrets of nutrition with this guide to essentials. Learn about macronutrients, micronutrients, and how to create a balanced diet that supports optimal health. Empower yourself with knowledge and make informed choices about what you eat.", "Date_posted": "11/01/2010", "created_user_id": "41" },
          { "id": 11, "title": "Stress Management Techniques", "category": "Mental Health", "Description": "Manage stress effectively with these proven techniques. From deep breathing exercises to progressive muscle relaxation, these techniques can help you unwind and find inner peace amidst life's challenges. Take control of your stress and improve your mental well-being.", "Date_posted": "01/04/2000", "created_user_id": "81" },
          { "id": 12, "title": "Sleep Hygiene Practices", "category": "Sleep", "Description": "Enhance your sleep hygiene with these practical practices. Create a sleep-friendly environment, establish a relaxing bedtime routine, and prioritize sleep as a vital component of overall health. Experience deeper, more restorative sleep with these simple yet effective strategies.", "Date_posted": "01/09/2000", "created_user_id": "19" },
          { "id": 13, "title": "Weight Management Strategies", "category": "Weight loss", "Description": "Implement effective weight management strategies for long-term success. Set realistic goals, track your progress, and make sustainable lifestyle changes that support healthy weight management. Transform your relationship with food and achieve a balanced approach to eating and exercise.", "Date_posted": "11/01/2000", "created_user_id": "10" },
          { "id": 14, "title": "Heart-Healthy Recipes", "category": "Heart health", "Description": "Explore delicious and nutritious heart-healthy recipes. From hearty soups to flavorful salads, these recipes are packed with ingredients that support cardiovascular health. Enjoy tasty meals that nourish your body and delight your taste buds.", "Date_posted": "01/01/2010", "created_user_id": "12" },
          { "id": 15, "title": "Balanced Meal Planning", "category": "Diet", "Description": "Master the art of balanced meal planning with this comprehensive guide. Learn how to create meals that provide the perfect combination of protein, carbohydrates, fats, vitamins, and minerals. Say goodbye to food boredom and hello to delicious, nutritious meals.", "Date_posted": "01/01/2009", "created_user_id": "13" }
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
