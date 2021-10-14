import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles.css';

import {
  Box,
  Button,
  Grid,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from '@mui/material';

const RecipeItem = ({ recipe, save, plan, noSave = false }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const daySelect = (e) => {
    plan({
      weekday: e.target.id,
      recipe,
    });
    handleClose();
  };

  const checkImage = () => {
    if (!recipe?.image) {
      return (
        <Paper className="noImage">
          <Typography>
            No photo available
          </Typography>
        </Paper>
      );
    }
    return (
      <Paper className="thumbnail" sx={{ backgroundImage: `url(${recipe.image})` }} />
    );
  };

  const listIngredients = () => {
    if (!recipe?.ingredients) {
      return 'Check the recipe source for more information...';
    }
    return (
      <ul className="columnList">
        {recipe.ingredients.map((item, i) => (<li key={i}>{item.text}</li>))}
      </ul>
    );
  };

  return (
    <Grid container spacing={1} className="recipeItem">
      <Grid item xs={2}>
        {checkImage()}
      </Grid>
      <Grid item xs={8}>
        <Typography variant="h6" noWrap={true}>
          {recipe.label}
        </Typography>
        <Box className="description">
          <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Ingredients:</Typography>
          <Typography variant="caption">{listIngredients()}</Typography>
        </Box>
      </Grid>
      <Grid item xs={2}>
        <a href={recipe.url} target="_blank" rel="noreferrer" className="nolink">
          <Button variant="text" size="small">View Recipe</Button>
        </a>
        {noSave ? null : (<Button variant="text" size="small" onClick={() => { save(recipe); }}>Save Recipe</Button>)}
        <Button variant="text" size="small" onClick={handleClick}>Add to Plan</Button>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={daySelect} id="monday">monday</MenuItem>
          <MenuItem onClick={daySelect} id="tuesday">tuesday</MenuItem>
          <MenuItem onClick={daySelect} id="wednesday">wednesday</MenuItem>
          <MenuItem onClick={daySelect} id="thursday">thursday</MenuItem>
          <MenuItem onClick={daySelect} id="friday">friday</MenuItem>
          <MenuItem onClick={daySelect} id="saturday">saturday</MenuItem>
          <MenuItem onClick={daySelect} id="sunday">sunday</MenuItem>
        </Menu>
      </Grid>
    </Grid>
  );
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
  save: PropTypes.func.isRequired,
  plan: PropTypes.func.isRequired,
  noSave: PropTypes.bool,
};

export default RecipeItem;
