import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles.css';

import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  InputAdornment,
  TextField,
} from '@mui/material';

const RecipesSearch = ({ update }) => {
  const [searchValue, setSearchValue] = useState('');

  const submitSearch = (e) => {
    e.preventDefault();
    if (searchValue.length) {
      console.log('searching for:', searchValue);
      axios.get(`http://localhost:3000/recipes/search?q=${searchValue}`)
        .then(({ data }) => update(data))
        .then(() => setSearchValue(''))
        .catch(() => console.log('Search failed, wait 1 minute and then try again'));
    }
  };

  const setValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box component="form" noValidate autoComplete="off" onSubmit={submitSearch}>
      <TextField
        size="small"
        label="Recipe Search"
        value={searchValue}
        onChange={setValue}
        fullWidth
        InputProps={{
          endAdornment: <InputAdornment position="end"><SearchIcon /></InputAdornment>,
        }}
      />
    </Box>
  );
};

RecipesSearch.propTypes = {
  update: PropTypes.func.isRequired,
};

export default RecipesSearch;
