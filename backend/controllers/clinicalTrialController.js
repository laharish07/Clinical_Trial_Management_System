const { ClinicalTrial } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(ClinicalTrial, 'Trial_id');