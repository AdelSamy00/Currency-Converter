import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { InputAmount } from './Components/InputAmount.jsx';
import { SwitchCurrency } from './Components/SwitchCurrency.jsx';
import { SelectCountry } from './Components/SelectCountry.jsx';
import { useContext, useEffect, useState } from 'react';
import { CurrencyContext } from './Context/CurrencyContext.jsx';
import axios from 'axios';

function App() {
  const { from, setFrom, to, setTo, amount, setAmount, result, setResult } =
    useContext(CurrencyContext);
  console.log(from);
  const codeFromCurrency = from.code.split(' ')[0];
  const codeToCurrency = to.code.split(' ')[0];
  useEffect(() => {
    if (amount) {
      let config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Credentials': 'true',
        },
      };
      axios
        .get(
          `https://v6.exchangerate-api.com/v6/${
            import.meta.env.VITE_APP_API_KEY
          }/pair/${codeFromCurrency}/${codeToCurrency}`,
          config
        )
        .then((res) => {
          setResult(res.data.conversion_rate);
        })
        .catch((error) => console.log(error));
    }
  }, [amount, from, to]);
  const boxStyles = {
    background: '#fdfdfd',
    textAlign: 'center',
    color: '#222',
    minHeight: '20rem',
    borderRadius: 2,
    padding: '4rem 2rem',
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
    position: 'relative',
    marginTop: '10rem',
  };
  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{ marginBottom: '2rem' }}>
        Currency Converter
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCountry value={from} setValue={setFrom} label="From" />
        <SwitchCurrency />
        <SelectCountry value={to} setValue={setTo} label="To" />
      </Grid>

      {amount && (
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant="h5">
            {amount} {codeFromCurrency} = {result * amount} {codeToCurrency}
          </Typography>
        </Box>
      )}
    </Container>
  );
}

export default App;
