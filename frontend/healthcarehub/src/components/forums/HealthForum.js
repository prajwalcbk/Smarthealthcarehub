import React, { useState, useEffect, useDeferredValue} from 'react';
import axios from 'axios';
import './HealthForum.css'; // Import your CSS file for HealthForums styling
import Navbar from '../navbar/Navbar';
import { useHistory, useNavigate } from 'react-router-dom';
import CreateForum from './CreateForum';



const HealthForum = () => {
  const [Forums, setForums] = useState([]);
  const [specializationFilter, setSpecializationFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [titleFilter, setTitleFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages , setTotalPages ] = useState(1);



    const fetchDataFromApi = async (page) => {
      const response = await axios.get(`/api/get/forums?page=${page}`);
      return response.data;
  };

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchDataFromApi(currentPage);
            console.log(data.forumPosts.data)
            setForums(data.forumPosts.data);
            setTotalPages(data.forumPosts.last_page);
        };
        fetchData();
    }, [currentPage]);


  const handleNextPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage < totalPages) {
        return prevPage + 1;
      } else {
        return 1; // Go back to the first page if currently on the last page
      }
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => {
      if (prevPage > 1) {
        return prevPage - 1;
      } else {
        return totalPages; // Go to the last page if currently on the first page
      }
    });
  };






  
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
        <button onClick={handleCreateClick}> Create New  </button>
        
      </div>
      <div className="healthforum-list">

        {Forums.map(forum => (
          <div href='' key={forum.id} className="healthforum-card" onClick={() => handleForumClick(forum.id)}>
            <div className="left-section">
              <div style={{ paddingLeft: '20px' }}>
                <h2>{forum.title} </h2>
                <p>Forum Date:{forum.Date_posted}</p>
                <p>Category: {forum.category} </p>
                <p className="healthforum-description">{forum.description}</p>
              </div>
            </div>
          </div>
        
        ))}

      </div>
      <div className="healthforum-pagination-container">
          <div className="healthforum-card" style={{ "width": "30%" }}>
            <button onClick={() => handlePrevPage()} style={{ "margin": "2%" }} >Previous </button>
            <button onClick={() => handleNextPage()} style={{ "margin": "2%" }}>Next </button>
          </div>
      </div>
    </div>
  );
};

export default HealthForum;