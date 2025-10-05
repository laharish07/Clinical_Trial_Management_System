const { Volunteer } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(Volunteer, 'Volunteer_id');