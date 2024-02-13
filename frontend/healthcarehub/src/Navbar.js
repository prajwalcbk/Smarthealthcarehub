import React from 'react';
import './Navbar.css'; // Assuming you have a separate CSS file for Navbar styling
import Logo from './assets/Logo.svg';
import notification from './assets/bell.svg';
import profile from './assets/profile.svg';



const Home_Navbar = () => {
  const user = {
    name: 'Bob Marley',
    email: 'bob.marley@smarthealth.com'
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" href="/">
        <img src={Logo} width="50" height="50" alt="Logo" />
        SmartHealth Hub
      </div>
      <div className="ml-auto d-flex flex-row align-items-center" style={{ width: '30%', display: 'flex' ,justifyContent: 'space-evenly', alignItems: 'center' }}>
        <a className="nav-link mx-2" href="#home">
          Home
        </a>
        <a className="nav-link mx-2" href="#medical-records">
          Medical Records
        </a>
        <a className="nav-link mx-2" href="#notifications">
        <img src={notification} width="30" height="30" alt="notification" className='image'/>
        </a>
        {user && (
          <div className="dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="user-dropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
            </a>
            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="user-dropdown">
              <a className="dropdown-item" >
              <img   src={profile} width="30" height="30"  alt="profile" className='image' />
              {user.name}
              <br />
              {user.email}
              </a>
              
            </div> 
          </div>
          
        )}
      </div>
    </nav>
    
  );
};

export default Home_Navbar;
