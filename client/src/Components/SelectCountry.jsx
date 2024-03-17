import { Autocomplete, Grid, Skeleton, TextField } from '@mui/material';
import React from 'react';
import useAxios from '../useAxios';

export const SelectCountry = ({ value, setValue, label }) => {
  const [data, error, loaded] = useAxios('https://restcountries.com/v3.1/all');
  if (loaded) {
    return (
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60} />
      </Grid>
    );
  }
  const dataFilter = data.filter((item) => 'currencies' in item);
  const dataCountries = dataFilter.map((item) => {
    return `${item.flag} ${Object.keys(item.currencies)[0]} - ${
      item.name.common
    }`;
  });
  //console.log(dataCountries);
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        value={value}
        options={dataCountries}
        disableClearable
        onChange={(e, newVal) => {
          setValue(newVal);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};
