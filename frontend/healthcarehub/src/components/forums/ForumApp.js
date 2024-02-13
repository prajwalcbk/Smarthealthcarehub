import React, { useState, useEffect } from 'react';
import './ForumApp.css';
import Navbar from './../navbar/Navbar'
const ForumApp = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    // Simulated data for demonstration
    const mockPosts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
      { id: 3, title: "Post 3" },
    ];
    setPosts(mockPosts);
  }, []);

  const handleClickPost = (postId) => {
    setSelectedPost(postId);
  };

  return (
    <div className="container">
    <Navbar />
    <div className="details-form">
      <h1>Forum</h1>
      <PostList posts={posts} onClickPost={handleClickPost} />
      {selectedPost && <AnswerList postId={selectedPost} />}
      {selectedPost && <AnswerForm postId={selectedPost} />}
    </div>
    </div>
  );
};

const PostList = ({ posts, onClickPost }) => {
  return (
    <ul>
      {posts.map(post => (
        <li key={post.id} onClick={() => onClickPost(post.id)}>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

const AnswerList = ({ postId }) => {
  // Simulated data for demonstration
  const mockAnswers = [
    { id: 1, postId: postId, text: "Answer 1 for Post " + postId },
    { id: 2, postId: postId, text: "Answer 2 for Post " + postId },
  ];

  return (
    <div>
      <h2>Answers for Post {postId}</h2>
      <ul>
        {mockAnswers.map(answer => (
          <li key={answer.id}>{answer.text}</li>
        ))}
      </ul>
    </div>
  );
};

const AnswerForm = ({ postId }) => {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated function to handle answer submission
    alert(`Answer submitted for Post ${postId}: ${answer}`);
    // Clear the answer field
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ForumApp;
