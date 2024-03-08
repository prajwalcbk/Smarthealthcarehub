import React, { useState } from 'react';
import './Login.css'; // Import your custom CSS for styling
import Navbar from './../navbar/Navbar'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useHistory, useNavigate } from 'react-router-dom';
import LoginNotification from './../LoginNotification'


function LoginPage() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Implement login functionality here
    const data= {
      email : email ,
      password : password 
    }
    console.log(data)

    if (email === 'doctor@gmail.com' && password === 'doctor@123'){
      setError(null);
      setSuccessMessage('Logged in successfully as doctor');
      localStorage.setItem('token', '123');
      localStorage.setItem('role', 'doctor');
       setTimeout(() => {
            console.log("navigating to / page")
            navigate('/');
            window.location.reload();
        }, 1000); 
    }

    else if (email=='patient@gmail.com' && password=='patient@123'){
      setError(null);
      setSuccessMessage('Logged in successfully as patient');
      localStorage.setItem('token', '123');
      localStorage.setItem('role', 'patient');
       setTimeout(() => {
            navigate('/');
            window.location.reload();
        }, 1000); 
    }

    else if (email=='healthadmin@gmail.com' && password=='healthadmin'){
      setError(null);
      setSuccessMessage('Logged in successfully as healthadmin@123');
      localStorage.setItem('token', '123');
      localStorage.setItem('role', 'healthadmin');
       setTimeout(() => {
            navigate('/');
            window.location.reload();
        }, 1000); 
    }

    else if (email=='pharmacist@gmail.com' && password=='pharmacist@123'){
      setError(null);
      setSuccessMessage('Logged in successfully as pharmacist');
      localStorage.setItem('token', '123');
      localStorage.setItem('role', 'pharmacist');
       setTimeout(() => {
            navigate('/');
            window.location.reload();

        }, 1000); 
    }

    else{
      setSuccessMessage(null);
      setError('Invalid credentials');
    }






      // axios.post('http://localhost/login', data)
      // .then(response => {
      //   console.log('Loggedin Successfully:', response.data);
      //   // Optionally, reset form fields or perform other actions upon successful submission
      // })
      // .catch(error => {
      //   console.error('Failed to login', error);
      //   // Handle error appropriately, e.g., display error message to user
      // });
    console.log('Logging in with email:', email, 'and password:', password);
  };


  return (
    <div className="container">
    <Navbar />
    <LoginNotification />
      <div className="login-form">
        <h1>Login</h1>
        <div>{error && <p className="error-message">{error}</p>}</div>
        <div>{successMessage && <p className="success-message">{successMessage}</p>}</div>
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
        <div className="form-group">
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
        <div className="form-group">
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="form-links">
        <Link to='/forgotpassword'>
            Forgot Password?
          </Link>
          <span className="separator">|</span>
          <Link to='/signup'>
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
