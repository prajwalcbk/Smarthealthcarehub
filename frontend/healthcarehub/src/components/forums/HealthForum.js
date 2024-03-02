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
        <button onClick={handleCreateClick}> Ask </button>
        
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