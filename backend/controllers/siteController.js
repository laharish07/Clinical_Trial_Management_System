const { Site } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(Site, 'Site_id');