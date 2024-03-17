import { Autocomplete, Box, Grid, Skeleton, TextField } from '@mui/material';
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
    return {
      code: `${Object.keys(item.currencies)[0]} - ${item.name.common}`,
      flag: `${item.flags.png}`,
    };
  });
  return (
    <Grid item xs={12} md={3}>
      <Autocomplete
        isOptionEqualToValue={(props, value) => value.code === props.code}
        value={value}
        options={dataCountries}
        autoHighlight
        getOptionLabel={(option) => option.code}
        renderOption={(props, option) => (
          <Box
            component="li"
            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
            {...props}
          >
            <img
              loading="lazy"
              width="20"
              srcSet={option.flag}
              src={option.flag}
              alt=""
            />
            {option.code}
          </Box>
        )}
        disableClearable
        onChange={(e, newVal) => {
          setValue(newVal);
        }}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </Grid>
  );
};
