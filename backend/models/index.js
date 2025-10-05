const sequelize = require('../config/database');
const Volunteer = require('./volunteer');
const ConsentForm = require('./consent_form');
const ClinicalTrial = require('./clinical_trial');
const Investigator = require('./investigator');
const Site = require('./site');
const EligibilityCriterion = require('./eligibility_criterion');
const Participation = require('./participation');
const HealthRecord = require('./health_record');

// Define Associations
const foreignKeyConfig = {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
};

// Volunteer -> ConsentForm, Participation, HealthRecord
Volunteer.hasMany(ConsentForm, { foreignKey: 'Volunteer_id', ...foreignKeyConfig });
ConsentForm.belongsTo(Volunteer, { foreignKey: 'Volunteer_id' });

Volunteer.hasMany(Participation, { foreignKey: 'Volunteer_id', ...foreignKeyConfig });
Participation.belongsTo(Volunteer, { foreignKey: 'Volunteer_id' });

Volunteer.hasMany(HealthRecord, { foreignKey: 'Volunteer_id', ...foreignKeyConfig });
HealthRecord.belongsTo(Volunteer, { foreignKey: 'Volunteer_id' });

// ClinicalTrial -> EligibilityCriterion, Participation
ClinicalTrial.hasMany(EligibilityCriterion, { foreignKey: 'Trial_id', ...foreignKeyConfig });
EligibilityCriterion.belongsTo(ClinicalTrial, { foreignKey: 'Trial_id' });

ClinicalTrial.hasMany(Participation, { foreignKey: 'Trial_id', ...foreignKeyConfig });
Participation.belongsTo(ClinicalTrial, { foreignKey: 'Trial_id' });

const db = {
    sequelize,
    Volunteer,
    ConsentForm,
    ClinicalTrial,
    Investigator,
    Site,
    EligibilityCriterion,
    Participation,
    HealthRecord
};

module.exports = db;