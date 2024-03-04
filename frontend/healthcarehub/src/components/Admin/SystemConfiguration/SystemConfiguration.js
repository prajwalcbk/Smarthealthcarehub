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
    username: '',
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

  const handleUsernameChange = (e) => {
    setAdminCredentials({ ...adminCredentials, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setAdminCredentials({ ...adminCredentials, password: e.target.value });
  };

  const handleMaintenanceToggle = () => {
    setMaintenanceMode(!maintenanceMode);
  };

  const handleFeatureToggle = (feature) => {
    setFeatures({ ...features, [feature]: !features[feature] });
  };

  return (
    <div className="systemconfiguration">
      <h2>System Configuration</h2>

      <div>
        <h3>Login and SignUp Settings</h3>
        <label>
          <input
            type="checkbox"
            checked={loginEnabled}
            onChange={handleLoginToggle}
          />
          Enable Login
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            checked={signUpEnabled}
            onChange={handleSignUpToggle}
          />
          Enable SignUp
        </label>
      </div>

      <hr />

      <div>
        <h3>Login Expiration Time</h3>
        <label>
          Expiration Time (minutes):
          <input
            type="number"
            value={expirationTime}
            onChange={handleExpirationTimeChange}
          />
        </label>
      </div>

      <hr />

      <div>
        <h3>Roles List Settings</h3>
        {roles.map((role, index) => (
          <label key={index}>
            <input
              type="checkbox"
              checked={role.enabled}
              onChange={() => handleRoleToggle(index)}
            />
            {role.name}
          </label>
        ))}
      </div>

      <hr />

      <div>
        <h3>Admin Credentials Settings</h3>
        <label>
          Username:
          <input
            type="text"
            value={adminCredentials.username}
            onChange={handleUsernameChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={adminCredentials.password}
            onChange={handlePasswordChange}
          />
        </label>
      </div>

      <hr />

      <div>
        <h3>Maintenance Settings</h3>
        <label>
          <input
            type="checkbox"
            checked={maintenanceMode}
            onChange={handleMaintenanceToggle}
          />
          Site Down for Maintenance
        </label>
      </div>

      <hr />

      <div>
        <h3>Enable Features</h3>
        {Object.entries(features).map(([feature, enabled]) => (
          <label key={feature}>
            <input
              type="checkbox"
              checked={enabled}
              onChange={() => handleFeatureToggle(feature)}
            />
            {feature}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SystemConfiguration;
