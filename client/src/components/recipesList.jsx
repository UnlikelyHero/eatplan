import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import RecipesSearch from './recipesSearch.jsx';
import RecipeItem from './recipeItem.jsx';
import '../styles.css';

import {
  Box,
  Tab,
  Tabs,
} from '@mui/material';

const RecipesList = ({ recipes, update, plan }) => {
  const [tabValue, setTab] = useState(0);
  const [searchResults, updateResults] = useState([]);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const saveRecipe = (recipe) => {
    axios.post('/recipes/save', recipe)
      .then(() => update([...recipes, recipe]))
      .then(() => console.log('recipe saved successfully'))
      .catch((e) => console.log(e));
  };

  const listSavedRecipes = () => {
    if (recipes?.length) {
      return recipes.map((recipe, i) => (
        <Box key={i}>
          <RecipeItem recipe={recipe} save={update} plan={plan} noSave={true} />
        </Box>
      ));
    }
    return 'Click "Search Recipes" to begin...';
  };

  const searchRecipes = () => {
    const recipeList = !searchResults.length ? null : searchResults.map((result, i) => (
      <Box key={i}>
        <RecipeItem recipe={result} save={saveRecipe} plan={plan} />
      </Box>
    ));
    return (
      < >
        <RecipesSearch update={updateResults} />
        <Box className="searchResults">
          {recipeList}
        </Box>
      </>
    );
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Saved Recipes" />
          <Tab label="Search Recipes" />
        </Tabs>
      </Box>
      <Box sx={{ width: '100%', paddingTop: '10px' }}>
        {tabValue === 0 ? listSavedRecipes() : searchRecipes()}
      </Box>
    </Box>
  );
};

RecipesList.propTypes = {
  recipes: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired,
  plan: PropTypes.func.isRequired,
};

export default RecipesList;
