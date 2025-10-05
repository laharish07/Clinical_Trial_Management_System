const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Participation = sequelize.define('Participation', {
    Participation_Id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Enrollment_Date: { type: DataTypes.DATEONLY, allowNull: false, defaultValue: DataTypes.NOW },
    Status: { type: DataTypes.ENUM('Active', 'Withdrawn', 'Completed'), allowNull: false, defaultValue: 'Active' },
    Volunteer_id: { type: DataTypes.INTEGER, allowNull: false },
    Trial_id: { type: DataTypes.INTEGER, allowNull: false }
}, { tableName: 'Participation', timestamps: false });

module.exports = Participation;