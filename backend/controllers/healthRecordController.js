const { HealthRecord } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(HealthRecord, 'Record_Id');