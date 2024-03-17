import { Grid, InputAdornment, TextField } from '@mui/material';
import React, { useContext } from 'react';
import { CurrencyContext } from '../Context/CurrencyContext';

export const InputAmount = () => {
  const { amount, setAmount } = useContext(CurrencyContext);
  return (
    <Grid item xs={12} md>
      <TextField
        label="Amount"
        fullWidth
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        InputProps={{
          type: 'number',
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
    </Grid>
  );
};
