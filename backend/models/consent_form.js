const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Consent_form = sequelize.define('Consent_form', {
    Consent_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Date_signed: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.ENUM('Signed', 'Withdrawn', 'Pending'), allowNull: false, defaultValue: 'Pending' },
    Volunteer_id: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'Consent_form', timestamps: false });

module.exports = Consent_form;