import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { filterListings } from '../actions/dashboardActions';


function Dashboard({ lists, price, propertyType, isReset, setPropertyType, setPrice }) {
  const [filteredLists, setFilteredLists] = useState([]);

  useEffect(() => {
    const filtered = filterListings(lists, propertyType, price);
    setFilteredLists(filtered);
  }, [lists, propertyType, price]);

  useEffect(() => {
    if (isReset) {
      setPropertyType('');
      setPrice('');
    }
  }, [isReset, setPropertyType, setPrice]);

  return (
    <div className="dashboard">
      <h2>Data</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Price</th>
            <th>Room Type</th>
            <th>Amenities</th>
            <th>Accommodates</th>
            <th>Bedrooms</th>
          </tr>
        </thead>
        <tbody>
          {filteredLists.map((listing) => (
            <tr key={listing.id}>
              <td>{listing.id}</td>
              <td>{listing.property_type}</td>
              <td>{listing.price}</td>
              <td>{listing.room_type}</td>
              <td>{listing.amenities.join(', ')}</td>
              <td>{listing.accommodates}</td>
              <td>{listing.bedrooms}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

Dashboard.propTypes = {
  lists: PropTypes.arrayOf(PropTypes.object).isRequired,
  price: PropTypes.string.isRequired,
  propertyType: PropTypes.string.isRequired,
  isReset: PropTypes.bool.isRequired,
  setPropertyType: PropTypes.func.isRequired,
  setPrice: PropTypes.func.isRequired,
};

export default Dashboard;