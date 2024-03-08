import React, { useState, useEffect, useDeferredValue} from 'react';
import './HealthForum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
import { useHistory, useNavigate } from 'react-router-dom';
import CreateForum from './CreateForum';



const HealthForum = () => {
  const [forums, setForums] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [filteredForums, setFilteredForums] = useState([]);
  const [specializationFilter, setSpecializationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [descriptionFilter, setDescriptionFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [forumsPerPage, setforumsPerPage ] = useState(10);
  //const [data, setData] = useState('');

  



  useEffect(() => {
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
  setForums(dummyForumsData);
}, []);

  useEffect(() => {
    // Apply filters whenever specializationFilter or locationFilter changes
    const filtered = forums.filter(forum => {
      const category = forum.category || ''
      const Description = forum.Description || '';
      const title = forum.title || '';
      return (
        category.toLowerCase().includes(categoryFilter.toLowerCase()) &&
        Description.toLowerCase().includes(descriptionFilter.toLowerCase()) && 
        title.toLowerCase().includes(titleFilter.toLowerCase())
      );
    });
    setFilteredForums(filtered);
  }, [forums, categoryFilter, descriptionFilter , titleFilter]);

  // Pagination

  const indexOfLastForum = currentPage * forumsPerPage;
  const indexOfFirstForum = indexOfLastForum - forumsPerPage;
  const currentForums = filteredForums.slice(indexOfFirstForum)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/CreateForum');
  };
  
  const handleForumClick = (forumId) => {
  // Navigate to the specified URL when the card is clicked
  navigate(`/forum/${forumId}`);
};

  return (
    <div className="healthforum-container">
    <Navbar />
      <h1 className="healthforum-heading">Health Forums </h1>
      <div className="healthforum-filter-container">

        <select
          value={specializationFilter}
          onChange={e => setSpecializationFilter(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="All">All</option>
          <option value="Diet">Diet</option>
          <option value="Exercise">Exercise</option>
          <option value="Mental Health">Mental Health</option>
          <option value="Sleep">Sleep</option>
          <option value="Weight Loss">Weight Loss</option>
          <option value="Women's Health">Women's Health</option>
          <option value="Men's Health">Men's Health</option>
          <option value="Heart Health">Heart Health</option>
        </select>


        <input
          type="text"
          placeholder="Search"
          value={titleFilter}
          onChange={e => setTitleFilter(e.target.value)}
        />
        <button onClick={handleCreateClick}> Create  </button>
        
      </div>
      <div className="healthforum-list">

        {currentForums.map(forum => (
          <div href='' key={forum.id} className="healthforum-card" onClick={() => handleForumClick(forum.id)}>
            <div className="left-section">
              <div style={{ paddingLeft: '20px' }}>
                <h2>{forum.title} </h2>
                <p>Forum Date:{forum.Date_posted}</p>
                <p>Category: {forum.category} </p>
                <p className="healthforum-description">{forum.Description}</p>
              </div>
            </div>
          </div>
        
        ))}

      </div>
      <div className="healthforum-pagination-container">
        {filteredForums.length > forumsPerPage && (
          <div>
          <label>
          Count
          </label>
          <select
            value={forumsPerPage}
            onChange={e => setforumsPerPage(e.target.value)}
          >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
            <button onClick={() => paginate(currentPage + 1)}>Next </button>
            <button onClick={() => paginate(currentPage - 1)}>Previous </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthForum;