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
import AboutUsPage from './components/AboutUs/AboutUsPage';
import Services from './components/Services/ServicePage';
import ContactUs from './components/CompanyDropdown/ContactUs';

import SymptomChecker from './components/SymptomChecker/SymptomChecker'
// import Dummy from './components/dummy'
import Messenger from './components/messenger/Messenger'
import useAuthContext from './useAuthContext';
import { Navigate , Link} from 'react-router-dom';



function App() {
  const { authIsReady, user } = useAuthContext();
  console.log(authIsReady);
  console.log(user)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={authIsReady ?  <Navigate to="/" /> : <Login /> } />
          
          
          <Route path="/adminlogin" element={authIsReady ?  <Navigate to="/" /> : <AdminLogin /> } />
          
          
          <Route path="/signup" element={authIsReady ?  <Navigate to="/" /> : <SignUp /> } />
          
          
          <Route path="/forgotpassword" element={authIsReady ?  <Navigate to="/" /> : <ForgotPassword /> } />

          
          <Route path="/doctors" element={authIsReady ? <DoctorSearchPage /> : <Navigate to="/login" />} />
          
          
          <Route path="/patient" element={authIsReady ? <Patient /> : <Navigate to="/login" />} />
          <Route path="/doctor" element={authIsReady ? <Doctor /> : <Navigate to="/login" />} />
          <Route path="/pharmacist" element={authIsReady ? <Pharmacist /> : <Navigate to="/login" />} />
          <Route path="/admin" element={authIsReady ? <Admin /> : <Navigate to="/login" />} />
          <Route path="/healthadmin" element={authIsReady ? <HealthAdmin /> : <Navigate to="/login" />} />

          

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
