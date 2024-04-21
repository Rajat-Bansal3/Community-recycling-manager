import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RecycleCenters.css';

const RecycleCenters = () => {
  const [centers, setCenters] = useState([]);

  // Fetch recycling center data from MySQL database
  useEffect(() => {
    axios.get('http://localhost:5173/Recycle_Centers')
      .then(response => {
        console.log('Data from backend:', response.data);
        setCenters(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  return (
    <div className='list'>
      <h1>Recycling Centers</h1>
      <div className="center-table">
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>ZIP Code</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {console.log(centers)}
            {Array.isArray(centers) && centers.length > 0 ? (
  centers.map(center => (
    <tr key={center.id}>
      <td>{center.name}</td>
      <td>{center.address}</td>
      <td>{center.city}</td>
      <td>{center.state}</td>
      <td>{center.zipCode}</td>
      <td>{center.phoneNumber}</td>
      <td>{center.email}</td>
      <td>{center.website}</td>
    </tr>
  ))
) : (
  <tr>
    <td colSpan="8">Loading...</td>
  </tr>
)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecycleCenters;
