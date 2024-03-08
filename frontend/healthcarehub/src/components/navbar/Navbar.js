import React, { useState, useEffect } from 'react';
import './Navbar.css'; // Import your custom CSS for styling
import Logo from '../../assets/daily-health-app.png';
import CompanyDropdown from '../CompanyDropdown/CompanyDropdown'
import { useNavigate , Link} from 'react-router-dom';



function Navbar() {

  const [isDropDownOpen, setDropDownOpen] = useState(false);
  const [isLoggedIn , setIsloggedIn]= useState(false);
  const [user , setuser]= useState('');
  const navigate = useNavigate();

  
  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token){
      setIsloggedIn(true)
    }
    else{
      setIsloggedIn(false)
    }
  }, []); 


  const handleDropDown = () => {
    setDropDownOpen(!isDropDownOpen);
  };

   const handleLogout = () => {
    
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    setIsloggedIn(false);
    console.log("navigating to /123");
    navigate('/');

  };


  return (
    <div className="navbar">
    <a href='/' className="logo-container">
    <img src={Logo} width="40" height="40" alt="Logo" />
    <span className="logo-text">SmartHealthCare Hub</span>
    </a> 
      <div className="nav-links">
      <Link to='/forums'>  <i className="fas fa-comments">  </i> Forums </Link>
      <CompanyDropdown />

      {!isLoggedIn && 
        <div>
      <Link to='/login'>  <i className="fas fa-sign-in-alt">  </i> Login </Link>
      <Link to='/signup'>  <i className="fas fa-user-plus">  </i> Sign Up</Link>
      </div>
      }
      {isLoggedIn && 
        <div> 
        <Link to={'/' + sessionStorage.getItem('user')}> <i className="fas fa-user-plus"> </i> {sessionStorage.getItem('user')} </Link>
        <p onClick={handleLogout}> <i className="fas fa-sign-in-alt"> </i>  Logout </p>
        
        </div>
      }

      </div>
    </div>
  );
}

export default Navbar;