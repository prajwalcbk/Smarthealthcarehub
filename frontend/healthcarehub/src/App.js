import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import AdminLogin from './components/adminlogin/Login';
import Forums from './components/forums/HealthForum';
import SignUp from './components/signup/Signup';
import ForgotPassword from './components/forgotpassword/ForgotPassword'

import ForumPage from './components/forums/ForumPage';
import FF from './components/forums/f';
import CreateForum from './components/forums/CreateForum';

import Home from './components/home/home';
import DoctorSearchPage from './components/appointment/doctorsearch'
import User from './components/UserProfile/User'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/healthadminlogin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/doctors" element={<DoctorSearchPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/f" element={<FF />} />
          <Route path="/user" element={<User />} />
          <Route path="/forumpage" element={<ForumPage form/>} />
          <Route path="/forum/:forumId" element={<ForumPage />} />
          <Route path="/createforum" element={<CreateForum />} />


          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
