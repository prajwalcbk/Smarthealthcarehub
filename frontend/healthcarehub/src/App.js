import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';

import Login from './components/login/Login';
import AdminLogin from './components/adminlogin/Login';
import SignUp from './components/signup/Signup';
import ForgotPassword from './components/forgotpassword/ForgotPassword'

import ForumPage from './components/forums/ForumPage';
import CreateForum from './components/forums/CreateForum';
import Forums from './components/forums/HealthForum';

import DoctorSearchPage from './components/appointment/doctorsearch'
import User from './components/User/User'
import SymptomChecker from './components/SymptomChecker/SymptomChecker'
import Dummy from './components/dummy'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          <Route path="/doctors" element={<DoctorSearchPage />} />
          <Route path="/user" element={<User />} />

          <Route path="/forums" element={<Forums />} />                    
          <Route path="/forum/:forumId" element={<ForumPage />} />
          <Route path="/createforum" element={<CreateForum />} />


          <Route path="/symptomchecker" element={<SymptomChecker />} />

          <Route path="/dummy" element={<Dummy />} />



          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
