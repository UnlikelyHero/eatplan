const Plan = require('../db/schemas/plan');
const db = require('../db/mongodb');

const savePlans = (plan, callback) => {
  const newPlans = plan.map((newPlan) => new Plan({
    weekday: newPlan.weekday,
    recipe: JSON.stringify(newPlan.recipe),
  }));
  db(() => Plan.collection.drop()
    .then(() => Plan.bulkSave(newPlans))
    .then((response) => callback(null, response))
    .catch((error) => callback(error)));
};

module.exports = savePlans;
