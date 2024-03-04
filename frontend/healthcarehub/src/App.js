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

import Footer from './components/footer/Footer'
import Patient from './components/Patient/User'
import Doctor from './components/Doctor/User'
import Pharmacist from './components/Pharmacist/User'
import HealthAdmin from './components/HealthAdmin/HealthAdmin'
import Admin from './components/Admin/Admin'
import AnalyticsDashboard from './components/AnalyticsDashboard/AnalyticsDashboard';
import AboutUsPage from './components/AboutUs/AboutUsPage';
import Services from './components/Services/ServicePage';
import IncidentReportPage from './components/IncidentReport/IncidentReportPage';

import SymptomChecker from './components/SymptomChecker/SymptomChecker'
import Dummy from './components/dummy'
import Messenger from './components/messenger/Messenger'


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
          
          <Route path="/patient" element={<Patient />} />
          <Route path="/doctor" element={<Doctor />} />
          <Route path="/pharmacist" element={<Pharmacist />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/healthadmin" element={<HealthAdmin />} />

          <Route path="/forums" element={<Forums />} />                    
          <Route path="/forum/:forumId" element={<ForumPage />} />
          <Route path="/createforum" element={<CreateForum />} />


          <Route path="/symptomchecker" element={<SymptomChecker />} />

          <Route path="/dummy" element={<Dummy />} />
          
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path='/IncidentReport' element={<IncidentReportPage />} />


          <Route path="/messenger" element={<Messenger />} />




          {/* Add more routes for other pages */}
        </Routes>
      </div>

    </Router>
  );
}

export default App;
