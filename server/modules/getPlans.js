const Plan = require('../db/schemas/plan');
const db = require('../db/mongodb');

const getPlans = (callback) => {
  db(() => Plan.find()
    .then((response) => {
      const planDatas = response.map((plan) => ({
        weekday: plan.weekday,
        recipe: JSON.parse(plan.recipe),
      }));
      callback(null, planDatas);
    }))
    .catch((error) => callback(error));
};

module.exports = getPlans;
