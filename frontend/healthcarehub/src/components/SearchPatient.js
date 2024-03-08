import React, { useState } from 'react';

function SearchPatient() {

  const [filterpatient , setFilterpatient] = useState('');


return (
	<div className="prescription-filter-container">
        <input
          type="text"
          placeholder="Search Patient"
          value={filterpatient}
          onChange={e => setFilterpatient(e.target.value)}
          style={{"width":"60%" , "color":"black"}}
        />
        <button style={{"margin":"2%"}}> Search </button>
      </div>
  )
}

export default SearchPatient;
