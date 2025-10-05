const express = require('express');
const router = express.Router();
const { Volunteer, Participation } = require('../models');

// Import all controllers
const volunteerController = require('../controllers/volunteerController');
const consentFormController = require('../controllers/consentFormController');
const clinicalTrialController = require('../controllers/clinicalTrialController');
const investigatorController = require('../controllers/investigatorController');
const siteController = require('../controllers/siteController');
const eligibilityCriterionController = require('../controllers/eligibilityCriterionController');
const participationController = require('../controllers/participationController');
const healthRecordController = require('../controllers/healthRecordController');

// Helper function to create standard CRUD routes
const createCrudRoutes = (path, controller) => {
    router.get(`/${path}`, controller.getAll);
    router.get(`/${path}/:id`, controller.getById);
    router.post(`/${path}`, controller.create);
    router.put(`/${path}/:id`, controller.update);
    router.delete(`/${path}/:id`, controller.delete);
};

// Generate CRUD routes for each model
createCrudRoutes('volunteers', volunteerController);
createCrudRoutes('consent-forms', consentFormController);
createCrudRoutes('trials', clinicalTrialController);
createCrudRoutes('investigators', investigatorController);
createCrudRoutes('sites', siteController);
createCrudRoutes('eligibility-criteria', eligibilityCriterionController);
createCrudRoutes('participations', participationController);
createCrudRoutes('health-records', healthRecordController);

// Example of a custom route to get all participants for a specific trial
router.get('/trials/:trialId/participants', async (req, res) => {
    try {
        const participants = await Participation.findAll({
            where: { Trial_id: req.params.trialId },
            include: [{ model: Volunteer }] // This joins the Volunteer table to get their details
        });
        if (participants) {
            res.status(200).json(participants);
        } else {
            res.status(404).json({ message: 'No participants found for this trial.' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching participants', error: error.message });
    }
});

module.exports = router;