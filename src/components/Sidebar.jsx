import React from 'react';
import PropTypes from 'prop-types';

function Sidebar({
  onPropertyTypeChange, onPriceChange, onReset, propertyType, price,
}) {
  const handleResetClick = () => {
    onReset();
  };

  return (
    <div className="sidebar">
      <h2>Filter</h2>
      <div>
        <label htmlFor="property-type">Property Type:</label>
        <select id="property-type" value={propertyType} onChange={onPropertyTypeChange}>
          <option value="">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Cabin">Cabin</option>
          <option value="House">House</option>
          <option value="Trailer">Trailer</option>
          <option value="Villa">Villa</option>
        </select>
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <select id="price" value={price} onChange={onPriceChange}>
          <option value="">All</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-300">$100 - $300</option>
          <option value="300-500">$300 - $500</option>
          <option value="500-800">$500 - $800</option>
          <option value="800+">$800+</option>
        </select>
      </div>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
}

Sidebar.propTypes = {
  onPropertyTypeChange: PropTypes.func.isRequired,
  onPriceChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  propertyType: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default Sidebar;

// import React from 'react';
// import PropTypes from 'prop-types';
// import PropertyTypeFilter from './propertyTypeFilter';
// import PriceFilter from './priceFilter';
// import ResetButton from './resetButton';

// function Sidebar({ onPropertyTypeChange, onPriceChange, onReset, propertyType, price }) {
//   return (
//     <div className="sidebar">
//       <h2>Filter</h2>
//       <PropertyTypeFilter
//         onPropertyTypeChange={onPropertyTypeChange}
//         propertyType={propertyType}
//       />
//       <PriceFilter onPriceChange={onPriceChange} price={price} />
//       <ResetButton onReset={onReset} />
//     </div>
//   );
// }

// Sidebar.propTypes = {
//   onPropertyTypeChange: PropTypes.func.isRequired,
//   onPriceChange: PropTypes.func.isRequired,
//   onReset: PropTypes.func.isRequired,
//   propertyType: PropTypes.string.isRequired,
//   price: PropTypes.string.isRequired,
// };
