import React, { useState } from 'react';
import './Login.css'; // Import your custom CSS for styling
import Navbar from './../navbar/Navbar'
import { Link } from "react-router-dom";
import Chatbot from '../Chatbot/Chatbot';
import IncidentReportIcon from '../IncidentReport/IncidentReportIcon';


function LoginPage() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    // Implement login functionality here
    console.log('Logging in with email:', email, 'and password:', password);
  };


  return (
    <div className="container">
    <Navbar />
      <div className="admin-login-form">
        <h1>Admin Login</h1>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => setemail(e.target.value)}
          />
        </div>
        <div className="admin-form-group">
          <label htmlFor="password">Password</label>
          <div className="password-input">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="admin-form-group">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="form-links">
          <Link to='/forgotpassword'>
            Forgot Password?
          </Link>
        </div>
      </div>
      
    </div>
  );
}

export default LoginPage;
