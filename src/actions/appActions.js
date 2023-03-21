/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import axios from 'axios';

export const fetchData = async (setLists) => {
  console.log('fetching data!');
  try {
    const response = await axios.get('/api/getData');
    if (response.status === 200) {
      console.log('success:', response.status);
    } else {
      console.log('status:', response.status);
    }
    setLists(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const handlePropertyTypeChange = (event, setPropertyType, setIsReset) => {
  setPropertyType((prevPropertyType) => event.target.value);
  console.log('Property-Type selected:', event.target.value);
  setIsReset(false);
};

export const handlePriceChange = (event, setPrice, setIsReset) => {
  setPrice((prevPrice) => event.target.value);
  console.log('Price selected: ', event.target.value);
  setIsReset(false);
};

export const handleReset = (setPropertyType, setPrice, setIsReset) => {
  setPropertyType((prevPropertyType) => '');
  setPrice((prevPrice) => '');
  setIsReset(true);
};

// import axios from 'axios';

// export const fetchData = async (setLists) => {
//   console.log("fetching data!")
//   try {
//     const response = await axios.get('/api/getData');
//     if (response.status === 200) {
//       console.log("success:", response.status)
//     } else {
//       console.log("status:", response.status)
//     }
//     setLists(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const handlePropertyTypeChange = (event, setPropertyType, setIsReset) => {
//   setPropertyType(event.target.value);
//   console.log("Property-Type selected:", event.target.value)
//   setIsReset(false);
// };

// export const handlePriceChange = (event, setPrice, setIsReset) => {
//   setPrice(event.target.value);
//   console.log("Price selected: ", event.target.value);
//   setIsReset(false);
// };

// export const handleReset = (setPropertyType, setPrice, setIsReset) => {
//   setPropertyType('');
//   setPrice('');
//   setIsReset(true);
// };
