const { getSavedRecipes } = require('../modules');

test('getSavedRecipes should return data from edamam api', done => {
  let callback = (err, { data }) => {
    expect(err).toBe(null);
    expect(data).toHaveProperty('label');
    done();
  }

  searchRecipes('chicken', callback);
});