import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import RecipesList from './components/recipesList.jsx';
import PlansList from './components/plansList.jsx';

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const App = () => {
  const [savedRecipes, updateRecipes] = useState([]);
  const [savedPlans, updatePlans] = useState([]);

  useEffect(() => {
    axios.get('/recipes/saved')
      .then(({ data }) => {
        console.log('Received saved recipes...');
        updateRecipes(data);
      })
      .then(() => axios.get('/plans'))
      .then(({ data }) => {
        console.log('Recieved saved plans...');
        updatePlans(data);
      })
      .then(() => console.log('EatPlanner loaded successfully!'))
      .catch((e) => console.log(e));
  }, []);

  if (!savedRecipes && !savedPlans) {
    return null;
  }

  const plan = (newPlan) => {
    const newPlans = savedPlans.slice();
    newPlans.push(newPlan);
    updatePlans(newPlans);
  };

  return (
    < >
      <Box maxWidth className="titlebar">
        <Typography variant="h5">
          EatPlanner
        </Typography>
      </Box>
      <Container maxWidth="lg" className="app">
        <Grid container spacing={3}>
          <Grid item sm={12} lg={4}>
            <Paper elevation={2} className="menuweek">
              <PlansList plans={savedPlans} update={updatePlans} />
            </Paper>
          </Grid>
          <Grid item sm={12} lg={8}>
            <Paper elevation={2} className="recipeView">
              <RecipesList recipes={savedRecipes} update={updateRecipes} plan={plan} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
