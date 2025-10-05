const { EligibilityCriterion } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(EligibilityCriterion, 'Criteria_Id');