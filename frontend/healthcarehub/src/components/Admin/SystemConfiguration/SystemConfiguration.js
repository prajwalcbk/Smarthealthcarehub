import React, { useState } from 'react';
import './SystemConfiguration.css'

const SystemConfiguration = () => {
  const [loginEnabled, setLoginEnabled] = useState(false);
  const [signUpEnabled, setSignUpEnabled] = useState(false);
  const [expirationTime, setExpirationTime] = useState(60);
  const [roles, setRoles] = useState([
    { name: 'Patient', enabled: true },
    { name: 'Doctor', enabled: true },
    { name: 'Pharmacist', enabled: true },
  ]);
  const [adminCredentials, setAdminCredentials] = useState({
    confirmpassword: '',
    password: '',
  });
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [features, setFeatures] = useState({
    appointments: true,
    messenger: true,
    prescription: true,
    healthRecords: true,
    medicationHistory: true,
  });

  const handleLoginToggle = () => {
    setLoginEnabled(!loginEnabled);
  };

  const handleSignUpToggle = () => {
    setSignUpEnabled(!signUpEnabled);
  };

  const handleExpirationTimeChange = (e) => {
    setExpirationTime(parseInt(e.target.value));
  };

  const handleRoleToggle = (index) => {
    const updatedRoles = [...roles];
    updatedRoles[index].enabled = !updatedRoles[index].enabled;
    setRoles(updatedRoles);
  };

  const handlePasswordChange = (e) => {
    setAdminCredentials({ ...adminCredentials, password: e.target.value });
  };

  const handlePasswordConfirmChange = (e) => {
    setAdminCredentials({ ...adminCredentials, confirmpassword: e.target.value });
  };

  const handleMaintenanceToggle = () => {
    setMaintenanceMode(!maintenanceMode);
  };

  const handleFeatureToggle = (feature) => {
    setFeatures({ ...features, [feature]: !features[feature] });
  };


  const [settings, setSettings] = useState({
    enableLogin: false,
    enableSignup: false,
    enablePatient: true,
    enableDoctor: true,
    enablePharmacist: true,
    enableAppointments: true,
    enableMessenger: true,
    enablePrescription:true,
    enableHealthRecords:true,
    enableMedicationHistory:true,
    enableMaintenance:false

  });

  const handleToggleSetting = (setting) => {
    setSettings({
      ...settings,
      [setting]: !settings[setting],
    });
  };

  const handleSubmit = () => {

  }

  return (

    <div className="systemconfiguration">
      <h2>System Configuration</h2>

        <h3>Login and SignUp Settings</h3>

        <div className="form-group">
        <label htmlFor="enablelogin">   Enable Login</label>
          <div className="toggle">
            <input
              type="checkbox"
              id="enablelogin"
              checked={settings.enableLogin}
              onChange={() => handleToggleSetting('enableLogin')}
            />
            <div className="slider round" onClick={() => handleToggleSetting('enableLogin')}></div>
          </div>
        </div>


        <div className="form-group">
        <label htmlFor="enablesignup"> Enable SignUp</label>
          <div className="toggle">
            <input
              type="checkbox"
              id="enablesignup"
              checked={settings.enableSignup}
              onChange={() => handleToggleSetting('enableSignup')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableSignup')}></div>
          </div>
        </div>

        <div>
        <label>
          Expiration Time (minutes):
          <input
            type="text"
            value={expirationTime}
            onChange={handleExpirationTimeChange}
            style={{"width": "30%"}}
          />
        </label>
      </div>


      <hr />


      <div>
        <h3>User Roles Settings</h3>

        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enableDoctor"
              checked={settings.enableDoctor}
              onChange={() => handleToggleSetting('enableDoctor')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableDoctor')}></div>
          </div>
          <label htmlFor="enableDoctor"> Enable Doctor</label>
        </div>

        
        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enablepatient"
              checked={settings.enablePatient}
              onChange={() => handleToggleSetting('enablePatient')}
            />
            <div className="slider round" onClick={() => handleToggleSetting('enablePatient')}></div>
          </div>
          <label htmlFor="enablepatient"> Enable Patient</label>
        </div>

      <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enablePharmacist"
              checked={settings.enablePharmacist}
              onChange={() => handleToggleSetting('enablePharmacist')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enablePharmacist')}></div>
          </div>
          <label htmlFor="enablePharmacist"> Enable Pharmacist</label>
        </div>



      </div>

      <hr />

      <div>
        <h3>Admin Credentials Settings</h3>
        <label>
          Password:
          <input
            type="password"
            value={adminCredentials.password}
            onChange={handlePasswordChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            value={adminCredentials.confirmpassword}
            onChange={handlePasswordConfirmChange}
          />
        </label>
      </div>

      <hr />

      <div>
        <h3>Maintenance Settings</h3>
        
        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enableMaintenance"
              checked={settings.enableMaintenance}
              onChange={() => handleToggleSetting('enableMaintenance')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableMaintenance')}></div>
          </div>
          <label htmlFor="enableMaintenance"> Under Maintenance</label>
        </div>
      </div>

      <hr />

      <div>
        <h3>Enable Features</h3>
        

        

        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enableAppointments"
              checked={settings.enableAppointments}
              onChange={() => handleToggleSetting('enableAppointments')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableAppointments')}></div>
          </div>
          <label htmlFor="enableAppointments">  Appointments</label>
        </div>

        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enableMessenger"
              checked={settings.enableMessenger}
              onChange={() => handleToggleSetting('enableMessenger')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableMessenger')}></div>
          </div>
          <label htmlFor="enableMessenger">  Messenger</label>
        </div>

        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enablePrescription"
              checked={settings.enablePrescription}
              onChange={() => handleToggleSetting('enablePrescription')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enablePrescription')}></div>
          </div>
          <label htmlFor="enablePrescription">  Prescriptions</label>
        </div>

        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enableHealthRecords"
              checked={settings.enableHealthRecords}
              onChange={() => handleToggleSetting('enableHealthRecords')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableHealthRecords')}></div>
          </div>
          <label htmlFor="enableHealthRecords">  HealthRecords</label>
        </div>

        <div className="form-group">
          <div className="toggle">
            <input
              type="checkbox"
              id="enableMedicationHistory"
              checked={settings.enableMedicationHistory}
              onChange={() => handleToggleSetting('enableMedicationHistory')}
            />

            <div className="slider round" onClick={() => handleToggleSetting('enableMedicationHistory')}></div>
          </div>
          <label htmlFor="enableMedicationHistory">  MedicationHistory</label>
        </div>

        <button onClick={handleSubmit} style={{"width" : "100%" , "margin-bottom": "8%"}}>  Save</button>

      </div>
    </div>
  );
};

export default SystemConfiguration;
