import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';

import {
  Box,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';

const RecipesList = () => {
  const [tabValue, setTab] = useState(0);
  const [savedRecipes, updateRecipes] = useState([]);

  useEffect(() => {
    axios.get('/recipes/saved')
      .then(({ data }) => {
        updateRecipes(data);
      })
      .catch((e) => console.log(e));
  }, []);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const listSavedRecipes = () => {
    if (savedRecipes?.length) {
      return savedRecipes.map((recipe) => {
        console.log('smile');
        return (
          < >
            <Typography>
              {recipe.label}
            </Typography>
          </>
        );
      });
    }
    return null;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Saved Recipes" />
          <Tab label="Search Recipes" />
        </Tabs>
        {tabValue === 0 ? listSavedRecipes() : 'recipe search'}
      </Box>
    </Box>
  );
};

export default RecipesList;
