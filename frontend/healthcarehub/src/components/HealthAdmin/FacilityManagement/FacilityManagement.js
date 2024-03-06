import React, { useState, useEffect, useDeferredValue} from 'react';
import './FacilityManagement.css'; // Import your CSS file for HealthForums styling
import Navbar from '../../navbar/Navbar';
import { useHistory, useNavigate } from 'react-router-dom';



const HealthForum = () => {
  const [Facilities, setFacilities] = useState([]);
  const [filteredFacilities, setFilteredFacilities] = useState([]);


  //const [data, setData] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const [forumsPerPage, setforumsPerPage ] = useState(10);
  const [nameFilter, setNameFilter] = useState('');



    useEffect(() => {
    // Apply filters whenever specializationFilter or locationFilter changes
    const filtered = Facilities.filter(facility => {
      const name = facility.name || '';
      return (
        name.toLowerCase().includes(nameFilter.toLowerCase())
      );
    });
    console.log(nameFilter,filtered)
    setFilteredFacilities(filtered);
  }, [Facilities ,  nameFilter]);



  useEffect(() => {
 const filteredFacilities = [
  { id: 1, name: 'Hospital A', location: 'City X', services: 'Emergency Care, Surgery, Pediatrics', status: 'Active', Description: 'Hospital A provides comprehensive healthcare services to patients in City X. Our facility offers state-of-the-art equipment and highly skilled medical professionals to ensure the best possible care for our patients.' },
  { id: 2, name: 'Clinic B', location: 'Town Y', services: 'Primary Care, Internal Medicine, Dermatology', status: 'Active', Description: 'Clinic B is a leading provider of primary and specialized healthcare services in Town Y. Our team of experienced physicians and staff are dedicated to delivering high-quality, patient-centered care.' },
  { id: 3, name: 'Medical Center C', location: 'Suburb Z', services: 'Family Medicine, Obstetrics, Cardiology', status: 'Inactive', Description: 'Medical Center C offers a wide range of medical services to residents of Suburb Z. While our facility is currently inactive, we are working diligently to resume operations and serve our community.' },
  { id: 4, name: 'Urgent Care D', location: 'Village W', services: 'Urgent Care, Laboratory Services, Radiology', status: 'Active', Description: 'Urgent Care D provides prompt and efficient medical care for non-life-threatening illnesses and injuries. Our facility is equipped with advanced diagnostic technology and staffed by experienced healthcare professionals.' },
  { id: 5, name: 'Community Health Center E', location: 'Township V', services: 'Preventive Care, Vaccinations, Behavioral Health', status: 'Active', Description: 'Community Health Center E is committed to promoting health and wellness in Township V. We offer a range of preventive and primary care services to individuals and families in our community.' },
  { id: 6, name: 'Surgical Center F', location: 'City Q', services: 'Surgical Procedures, Orthopedics, Pain Management', status: 'Active', Description: 'Surgical Center F specializes in performing a variety of surgical procedures, including orthopedic surgery and pain management interventions. Our facility is equipped with modern operating rooms and staffed by skilled surgeons and nurses.' },
  { id: 7, name: 'Rehabilitation Center G', location: 'Suburb P', services: 'Physical Therapy, Occupational Therapy, Speech Therapy', status: 'Active', Description: 'Rehabilitation Center G provides comprehensive rehabilitation services to individuals recovering from injuries or surgeries. Our team of therapists develops personalized treatment plans to help patients regain function and independence.' },
  { id: 8, name: 'Mental Health Clinic H', location: 'City R', services: 'Counseling, Psychotherapy, Medication Management', status: 'Active', Description: 'Mental Health Clinic H offers compassionate and effective mental health services to individuals experiencing emotional or psychological challenges. Our licensed therapists provide evidence-based treatments in a supportive environment.' },
  { id: 9, name: 'Diagnostic Imaging Center I', location: 'City S', services: 'X-rays, MRI, CT Scan', status: 'Active', Description: 'Diagnostic Imaging Center I specializes in providing high-quality imaging services to assist in the diagnosis and treatment of various medical conditions. Our facility is equipped with advanced imaging technology and staffed by experienced radiologists.' },
  { id: 10, name: 'Pediatric Clinic J', location: 'Town T', services: 'Pediatric Care, Well-Child Visits, Vaccinations', status: 'Active', Description: 'Pediatric Clinic J is dedicated to providing comprehensive healthcare services for children from infancy through adolescence. Our pediatricians focus on preventive care and early intervention to promote the health and development of young patients.' }
];

  setFacilities(filteredFacilities);
}, []);


  // Pagination

  const indexOfLastForum = currentPage * forumsPerPage;
  const indexOfFirstForum = indexOfLastForum - forumsPerPage;
  const currentForums = Facilities.slice(indexOfFirstForum)

  const paginate = pageNumber => setCurrentPage(pageNumber);
  

  return (
    <div className="facilitymanagement">
      <h1 className="facilitymanagement-heading">Facility Management </h1>
      <div className="facilitymanagement-filter-container">



        <input
          type="text"
          placeholder="Search"
          value={nameFilter}
          onChange={e => setNameFilter(e.target.value)}
        />
        <button> Search  </button>
        
      </div>
      <div className="facilitymanagement-list">

        {filteredFacilities.map(facility => (
          <div href='' key={facility.id} className="facilitymanagement-card" >
            <div className="left-section">
              <div style={{ paddingLeft: '20px' }}>
                <h2>{facility.name} </h2>
                <p>Location:{facility.location}</p>
                <p>Services Offered: {facility.services} </p>
                <p>Status: {facility.status} </p>
                <p className="facilitymanagement-description">{facility.Description}</p>
              </div>
            </div>
          </div>
        
        ))}

      </div>
      <div className="facilitymanagement-pagination-container">
        {Facilities.length > forumsPerPage && (
          <div>
          <label>
          Count
          </label>
          <select
            value={forumsPerPage}
            onChange={e => setforumsPerPage(e.target.value)}
          >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
            <button onClick={() => paginate(currentPage + 1)}>Next </button>
            <button onClick={() => paginate(currentPage - 1)}>Previous </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthForum;