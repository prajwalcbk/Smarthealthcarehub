import React, { useState } from 'react';
import './dummy.css'

const Communication = () => {
  const [users] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    // Add more users as needed
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const loadMessages = (userId) => {
    // Simulate loading messages from the server based on the selected user
    // Replace this with actual data fetching logic
    const sampleMessages = [
      { text: 'Hello, how can I assist you today?', sender: 'pharmacist', timestamp: '2024-03-10T08:30:00Z' },
      { text: 'I need to refill my prescription.', sender: 'patient', timestamp: '2024-03-10T08:35:00Z' },
      { text: 'Sure, could you please provide your prescription ID?', sender: 'pharmacist', timestamp: '2024-03-10T08:40:00Z' },
    ];
    setMessages(sampleMessages);
  };

  return (
    <div className="communication">
      <div className="user-list">
        <h2>Users</h2>
        <ul>
          {users.map(user => (
            <li key={user.id} onClick={() => {
              setSelectedUser(user);
              loadMessages(user.id);
            }}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="message-container">
        <h2>Messages</h2>
        {selectedUser ? (
          <div className="message-list">
            {messages.map((message, index) => (
              <div key={index} className={message.sender === 'pharmacist' ? 'sent' : 'received'}>
                <p>{message.text}</p>
                <small>{new Date(message.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        ) : (
          <p>Select a user to view messages.</p>
        )}
      </div>
    </div>
  );
};

export default Communication;
