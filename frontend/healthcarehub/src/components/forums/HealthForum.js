import React, { useState, useEffect } from 'react';
import './HealthForum.css'; // Import your CSS file for styling
import Navbar from './../navbar/Navbar'

function HealthForum() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch posts related to health from an API
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('API_ENDPOINT/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      //const data = await response.json();
      const data=[{"id":1234, "description": "Hello" , "title": "Hello world" , "category":"health", "user":"prajwal"},{"id":12, "description": "Hello" , "title": "Hello world" , "category":"health", "user":"prajwal"},{"id":123, "description": "Hello" , "title": "Hello world" , "category":"health", "user":"prajwal"}]
      setPosts(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAnswerChange = (postId, e) => {
    const { value } = e.target;
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [postId]: value,
    }));
  };

  const handleSubmitAnswer = async (postId) => {
    const answer = answers[postId];
    if (!answer) {
      setError('Please provide an answer');
      return;
    }

    try {
      const response = await fetch(`API_ENDPOINT/posts/${postId}/answers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit answer');
      }

      // Clear answer input and fetch posts again to update answers
      setAnswers((prevAnswers) => ({
        ...prevAnswers,
        [postId]: '',
      }));
      setError(null);
      fetchPosts();
    } catch (error) {
      setError(error.message);
    }
  };

  const handlePostClick = (postId) => {
    setSelectedPost(postId === selectedPost ? null : postId); // Toggle post selection
  };

  const getShortDescription = (description) => {
    // Get the starting two lines of the description
    const lines = description.split('\n');
    return lines.slice(0, 2).join('\n');
  };

  return (
    <div className="container">
    <Navbar />
    <div className="details-form">
      <h2>Health Posts</h2>
      {posts.map((post) => (
        <div key={post.id} className={`post ${selectedPost === post.id ? 'selected' : ''}`}>
          <h3 onClick={() => handlePostClick(post.id)}>
          {post.title} <br></br >
          {post.description}</h3>
          {selectedPost === post.id && (
            <div>
              <p>{getShortDescription(post.description)}</p>
              <p>Category: {post.category}</p>
              <p>Posted by: {post.user}</p>
              <input
                type="text"
                placeholder="Your answer..."
                value={answers[post.id] || ''}
                onChange={(e) => handleAnswerChange(post.id, e)}
              />
              <button onClick={() => handleSubmitAnswer(post.id)}>Submit Answer</button>
            </div>
          )}
        </div>
      ))}
      {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
}

export default HealthForum;
