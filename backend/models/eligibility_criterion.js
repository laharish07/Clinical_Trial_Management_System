const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Eligibility_Criterion = sequelize.define('Eligibility_Criterion', {
    Criteria_Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Age_Range: { type: DataTypes.STRING(50), allowNull: false },
    Medical_Conditions: { type: DataTypes.TEXT },
    Other_Requirements: { type: DataTypes.TEXT },
    Trial_id: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'Eligibility_Criterion', timestamps: false });

module.exports = Eligibility_Criterion;