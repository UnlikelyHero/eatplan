import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import '../styles.css';

import {
  Box,
  Grid,
  Button,
  Typography,
} from '@mui/material';

const PlansList = ({ plans }) => {
  const schedule = {};

  const displayPlans = () => {
    plans.forEach((plan) => {
      schedule[plan.weekday] = plan.recipe;
    });

    const display = Object.keys(schedule).map((day) => (
      <Box key={day} className="weekday">
        <Typography className="titlebar">{day}</Typography>
        <Typography>
          <a className="nolink-black" href={schedule[day].url} target="_blank" rel="noreferrer">
            {schedule[day].label}
          </a>
        </Typography>
      </Box>
    ));

    return display;
  };

  const savePlans = () => {
    axios.post('/plans', plans)
      .then((response) => console.log(response))
      .catch((e) => console.log(e));
  };

  return (
    <Box>
      <Box>
        <Grid container>
          <Grid item xs={10}>
            <Typography variant="h6" componnent="span" sx={{ flexGrow: 1 }}>
              Meal Plan
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button onClick={savePlans}>Save</Button>
          </Grid>
        </Grid>
      </Box>
      <Box>
        {plans?.length ? displayPlans() : null}
      </Box>
    </Box>
  );
};

PlansList.propTypes = {
  plans: PropTypes.array.isRequired,
  // update: PropTypes.func.isRequired,
};

export default PlansList;
