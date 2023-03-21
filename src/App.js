import React, { useState, useEffect, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import BarChart from './components/Charts';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sidebar: {
    width: 450,
  },
}));


function App() {
  const classes = useStyles();
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
    <div className={classes.root}>
      {/* <Header /> */}
      <CssBaseline />
      <Sidebar
        className={classes.sidebar}
        onPropertyTypeChange={handlePropertyTypeChangeCallback}
        onPriceChange={handlePriceChangeCallback}
        onReset={handleResetCallback}
        propertyType={propertyType}
        price={price}
      />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Container maxWidth="">
          <Grid container spacing={1} direction="column">
            <Grid item xs={12} md={20}>
              <Dashboard
                lists={lists}
                price={price}
                propertyType={propertyType}
                isReset={isReset}
                setPropertyType={setPropertyType}
                setPrice={setPrice}
              />
            </Grid>
            <Grid item xs={1} md={8}>
              <BarChart chartData={lists} />
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

export default App;
