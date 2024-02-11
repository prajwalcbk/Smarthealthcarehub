import React, { useState } from 'react';
import './SignUp.css'; // Import your custom CSS for styling

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const [isDoctor, setIsDoctor] = useState(false);
  const [error, setError] = useState(null);

  const handleSignUp = () => {
    // Implement signup functionality here
    console.log('Signing up with email:', email, 'and password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('Doctor:', isDoctor);
  };

  const handleToggleDoctor = () => {
    setIsDoctor(!isDoctor);
  };

  const handleLoginLink = () => {
    // Implement navigation to login page
    console.log('Navigating to login page');
  };

  return (
    <div className="container">
      <div className="signup-form">
        <h1>Sign Up</h1>
        <div>{error && <p className="error-message">{error}</p>}</div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            value={firstname}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            value={lastname}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="+1 408480XXXX"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="isDoctor"
              checked={isDoctor}
              onChange={handleToggleDoctor}
            />
            <div className="slider round"></div>
          </div>
          <label htmlFor="isDoctor">  Are you a Doctor ? </label>
        </div>
        
        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="isDoctor"
              checked={isDoctor}
              onChange={handleToggleDoctor}
            />
            <div className="slider round"></div>
          </div>
          <label htmlFor="isDoctor">  Are you a Pharmacist ? </label>
        </div>

        <button onClick={handleSignUp}>Sign Up</button>
        <div className="form-links">
          <span>Already have an account? </span>
          <a href="/login" onClick={handleLoginLink}>Login</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
