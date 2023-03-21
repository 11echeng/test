import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, HTMLSelect } from '@blueprintjs/core';
import '../Sidebar.css'

function Sidebar({
  onPropertyTypeChange, onPriceChange, onReset, propertyType, price,
}) {
  const handleResetClick = () => {
    onReset();
  };

  return (
    <div className="sidebar bp3-dark">
      <h2>Filter</h2>
      <FormGroup label="Property Type" labelFor="property-type">
        <HTMLSelect
          id="property-type"
          value={propertyType}
          onChange={onPropertyTypeChange}
          options={[
            { value: '', label: 'All' },
            { value: 'Apartment', label: 'Apartment' },
            { value: 'Cabin', label: 'Cabin' },
            { value: 'House', label: 'House' },
            { value: 'Trailer', label: 'Trailer' },
            { value: 'Villa', label: 'Villa' },
          ]}
        />
      </FormGroup>
      <FormGroup label="Price" labelFor="price">
        <HTMLSelect
          id="price"
          value={price}
          onChange={onPriceChange}
          options={[
            { value: '', label: 'All' },
            { value: '0-100', label: '$0 - $100' },
            { value: '100-300', label: '$100 - $300' },
            { value: '300-500', label: '$300 - $500' },
            { value: '500-800', label: '$500 - $800' },
            { value: '800+', label: '$800+' },
          ]}
        />
      </FormGroup>
      <Button onClick={handleResetClick} intent="danger">Reset</Button>
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
