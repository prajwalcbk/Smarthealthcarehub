import React, { useState, useEffect } from 'react';
import './f.css';

function HealthForum() {
  const [topics, setTopics] = useState([]);
  const [sortBy, setSortBy] = useState('newest');

  // Fetch topics data from an external source (e.g., API)
  useEffect(() => {
    const fetchTopics = async () => {
      const response = await fetch('https://your-api-endpoint.com/topics'); // Replace with your API endpoint
      const data = await response.json();
      setTopics(data);
    };

    fetchTopics();
  }, []);

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <div className="health-forum">
      <header>
        <h1>Health Forum</h1>
        <div className="search-bar">
          <input type="text" placeholder="Search for a topic..." />
          <button type="button">Search</button>
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <a href="#">All</a>
          </li>
          <li>
            <a href="#">Diet</a>
          </li>
          <li>
            <a href="#">Exercise</a>
          </li>
          <li>
            <a href="#">Mental Health</a>
          </li>
          <li>
            <a href="#">Sleep</a>
          </li>
          <li>
            <a href="#">Weight Loss</a>
          </li>
          <li>
            <a href="#">Women's Health</a>
          </li>
          <li>
            <a href="#">Men's Health</a>
          </li>
          <li>
            <a href="#">Heart Health</a>
          </li>
        </ul>
      </nav>
      <main>
        <div className="sort-bar">
          <label htmlFor="sort-by">Sort by:</label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="newest">Newest</option>
            <option value="most-popular">Most Popular</option>
          </select>
        </div>
        <ul className="topics-list">
          {topics.map((topic) => (
            <li key={topic.id}>
              <div className="topic-info">
                <h3>{topic.title}</h3>
                <p>
                  <span className="author">{topic.author}</span> - {topic.date}
                </p>
              </div>
              <p className="read-more">
                <a href="#">Read more</a>
              </p>
            </li>
          ))}
        </ul>
        <div className="pagination">
          {/* Add pagination buttons here */}
        </div>
      </main>
      <aside>
        {/* Add forum rules or other sidebar content here */}
      </aside>
    </div>
  );
}

export default HealthForum;