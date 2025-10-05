const { ConsentForm } = require('../models');
const { createGenericController } = require('./genericController');

module.exports = createGenericController(ConsentForm, 'Consent_id');