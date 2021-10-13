import React from 'react';
import './styles.css';
import RecipesList from './components/recipesList.jsx';

import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from '@mui/material';

const App = () => (
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
            Meal Plan
          </Paper>
        </Grid>
        <Grid item sm={12} lg={8}>
          <Paper elevation={2} className="recipeView">
            <RecipesList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default App;
