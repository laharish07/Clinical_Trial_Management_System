const { Investigator } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(Investigator, 'Investigator_id');