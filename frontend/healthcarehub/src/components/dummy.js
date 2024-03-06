import React from 'react';
import './dummy.css'; // Import CSS file for styling

function FacilityManagement() {
  const facilities = [
    {
      id: 1,
      name: "Hospital A",
      location: "City A",
      services: ["Emergency Care", "Surgery", "Pediatrics"],
      status: "Operational"
    },
    {
      id: 2,
      name: "Clinic B",
      location: "City B",
      services: ["Primary Care", "Dental Care", "Physical Therapy"],
      status: "Operational"
    },
    {
      id: 3,
      name: "Medical Center C",
      location: "City C",
      services: ["Cardiology", "Radiology", "Orthopedics"],
      status: "Under Maintenance"
    }
  ];

  return (
    <div className='facility-container'>
      <h1 className='facility-heading'>FACILITY MANAGEMENT</h1>
      <div className="facility-list">
        <h2>Facility List</h2>
        <ul>
          {facilities.map(facility => (
            <li key={facility.id}>
              <div className="facility-details">
                <h3>{facility.name}</h3>
                <p><strong>Location:</strong> {facility.location}</p>
                <p><strong>Services Offered:</strong> {facility.services.join(', ')}</p>
                <p><strong>Status:</strong> {facility.status}</p>
              </div>
            </li>
          ))}
        </ul>
    </div>
    </div>
  );
}

export default FacilityManagement;
