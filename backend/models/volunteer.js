const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Volunteer = sequelize.define('Volunteer', {
    Volunteer_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    dob: { type: DataTypes.DATEONLY, allowNull: false },
    gender: { type: DataTypes.ENUM('Male', 'Female', 'Other'), allowNull: false },
    Contact_info: { type: DataTypes.STRING(150), unique: true },
    Medical_history: { type: DataTypes.TEXT }
}, { tableName: 'Volunteer', timestamps: false });

module.exports = Volunteer;