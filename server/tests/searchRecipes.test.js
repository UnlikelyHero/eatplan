const { searchRecipes } = require('../modules');

test('searchRecipes should return data from edamam api', done => {
  let callback = (err, { data }) => {
    expect(err).toBe(null);
    expect(data).toHaveProperty('hits');
    done();
  }

  searchRecipes('chicken', callback);
});
