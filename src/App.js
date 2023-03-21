import React, { useState, useEffect, useCallback } from 'react';
import { Alignment, Navbar, Button, Classes, Icon } from "@blueprintjs/core";
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BarChart from './components/Charts';
import axios from 'axios';
import './App.css';

function App() {
  const [lists, setLists] = useState([]);
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [isReset, setIsReset] = useState(false);

  const fetchData = async (setLists) => {
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

  useEffect(() => {
    fetchData(setLists);
  }, []);

  const handlePropertyTypeChangeCallback = useCallback((event) => {
    setPropertyType(prevPropertyType => event.target.value);
    console.log("Property-Type selected:", event.target.value)
    setIsReset(false);
  }, []);

  const handlePriceChangeCallback = useCallback((event) => {
    setPrice(prevPrice => event.target.value);
    console.log("Price selected: ", event.target.value);
    setIsReset(false);
  }, []);

  const handleResetCallback = useCallback(() => {
    setPropertyType(prevPropertyType => '');
    setPrice(prevPrice => '');
    setIsReset(true);
  }, []);

  return (
    <div className="app">
      <Sidebar
        onPropertyTypeChange={handlePropertyTypeChangeCallback}
        onPriceChange={handlePriceChangeCallback}
        onReset={handleResetCallback}
        propertyType={propertyType}
        price={price}
      />
      <div className="main-content">
        <Dashboard
          lists={lists}
          price={price}
          propertyType={propertyType}
          isReset={isReset}
          setPropertyType={setPropertyType}
          setPrice={setPrice}
        />
        <BarChart chartData={lists} />
      </div>
    </div>
  );
}

export default App;