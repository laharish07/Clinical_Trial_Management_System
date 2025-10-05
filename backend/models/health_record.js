const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Health_Record = sequelize.define('Health_Record', {
    Record_Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Visit_Date: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
    Observation: { type: DataTypes.TEXT },
    Lab_Results: { type: DataTypes.TEXT },
    Volunteer_id: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'Health_Record', timestamps: false });

module.exports = Health_Record;