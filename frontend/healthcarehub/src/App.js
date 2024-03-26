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
import AboutUsPage from './components/CompanyDropdown/AboutUs/AboutUsPage';
import Services from './components/CompanyDropdown/ServicePage';
import ContactUs from './components/CompanyDropdown/ContactUs';

import SymptomChecker from './components/SymptomChecker/SymptomChecker'
// import Dummy from './components/dummy'
import Messenger from './components/messenger/Messenger'
import useAuthContext from './useAuthContext';
import { Navigate , Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar'
import './mobile.css'


function App() {


  const { authIsReady, user } = useAuthContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(authIsReady)
    // Once authIsReady becomes true, set loading to false
    if (authIsReady!== null) {
      setLoading(false);
    }
  }, [authIsReady]);

  // While loading, display a loading indicator
  if (loading) {

    return <div className="container">  </div>
  }



  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login"element={<Login />}   />
          
          
          <Route path="/adminlogin" element={<AdminLogin /> } />
          <Route path="/signup" element={authIsReady ?  <Navigate to="/" /> : <SignUp /> } />
          <Route path="/forgotpassword" element={authIsReady ?  <Navigate to="/" /> : <ForgotPassword /> } />
          <Route path="/doctors" element={authIsReady && user.role == 'PATIENT' ? <DoctorSearchPage /> : <Navigate to="/login" />} />
          
          
          <Route path="/patient" element={authIsReady && user.role == 'PATIENT' ?   <Patient />   :  <Navigate to="/login" />} />
          <Route path="/doctor" element={authIsReady && user.role == 'DOCTOR' ? <Doctor /> : <Navigate to="/login" />} />
          <Route path="/pharmacist" element={authIsReady && user.role == 'PHARMACIST' ? <Pharmacist /> : <Navigate to="/login" />} />
          <Route path="/admin" element={authIsReady && user.role == 'ADMIN' ? <Admin /> : <Navigate to="/adminlogin" />} />
          <Route path="/healthadmin" element={authIsReady && user.role == 'HEALTHADMIN' ? <HealthAdmin /> : <Navigate to="/login" />} />

          

          <Route path="/forums" element={<Forums />} />                    
          <Route path="/forum/:forumId" element={authIsReady ? <ForumPage /> : <Navigate to="/login" />} />
          <Route path="/createforum" element={authIsReady ? <CreateForum /> : <Navigate to="/login" />} />


          <Route path="/symptomchecker" element={<SymptomChecker />} />          
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path='/contact-us' element={<ContactUs />} />


          <Route path="/messenger" element={<Messenger />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
