import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import AdminLogin from './components/adminlogin/Login';
import Forums from './components/forums/HealthForum';
import SignUp from './components/signup/Signup';
import ForgotPassword from './components/forgotpassword/ForgotPassword'
import Doctor from './components/signup/doctor/Doctor'
import Pharmacist from './components/signup/pharmacist/Pharmacist'
import Patient from './components/signup/patient/Patient'
import ForumApp from './components/forums/ForumApp';

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
          <Route path="/a" element={<Doctor />} />
          <Route path="/b" element={<Pharmacist />} />
          <Route path="/c" element={<Patient />} />
          <Route path="/" element={<ForumApp />} />

          {/* Add more routes for other pages */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
