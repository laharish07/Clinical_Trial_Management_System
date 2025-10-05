const { Participation } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(Participation, 'Participation_Id');