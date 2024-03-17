import { Button, Grid } from '@mui/material';
import CompreArrowsIcons from '@mui/icons-material/CompareArrows';
import React, { useContext } from 'react';
import { CurrencyContext } from '../Context/CurrencyContext';

export const SwitchCurrency = () => {
  const { from, setFrom, to, setTo } = useContext(CurrencyContext);
  const handleSwitch = () => {
    setFrom(to);
    setTo(from);
  };
  return (
    <Grid item xs={12} md="auto">
      <Button
        sx={{
          borderRadius: 1,
          height: '100%',
        }}
        onClick={handleSwitch}
      >
        <CompreArrowsIcons sx={{ fontSize: 30 }} />
      </Button>
    </Grid>
  );
};
