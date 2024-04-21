import axios from "axios";
import React, { useEffect, useState } from "react";
import "./RecycleCenters.css";

const RecycleCenters = () => {
  const [centers, setCenters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [centersPerPage] = useState(10);

  const fetchCenters = async () => {
    try {
      const res = await axios.get("http://localhost:4040/recycle_centers");
      setCenters(res.data);
    } catch (error) {
      console.error("Error fetching recycling centers:", error); // Log any errors that occur during fetching
    }
  };

  useEffect(() => {
    fetchCenters();
  }, []);

  // Get current centers
  const indexOfLastCenter = currentPage * centersPerPage;
  const indexOfFirstDonor = indexOfLastCenter - centersPerPage;
  const currentCenters = centers?.slice(indexOfFirstDonor, indexOfLastCenter);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='list'>
      <h2 className=''>List of Centers</h2>
      <div className='table'>
        <table className='center-table'>
          <thead>
            <tr>
              <th className=''>Name</th>
              <th className=''>Address</th>
              <th className=''>City</th>
              <th className=''>State</th>
              <th className=''>ZIP Code</th>
              <th className=''>Phone Number</th>
              <th className=''>Email</th>
              <th className=''>Website</th>
            </tr>
          </thead>
          <tbody>
            {currentCenters?.map((center, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className=''>{center.name}</td>
                <td className=''>{center.address}</td>
                <td className=''>{center.city}</td>
                <td className=''>{center.state}</td>
                <td className=''>{center.zip_code}</td>
                <td className=''>{center.phone_number}</td>
                <td className=''>{center.email}</td>
                <td className=''>{center.website}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='center'>
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className=''
          >
            Previous
          </button>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentCenters?.length < centersPerPage}
            className=''
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecycleCenters;
