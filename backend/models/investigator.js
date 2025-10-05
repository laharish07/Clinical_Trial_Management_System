const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Investigator = sequelize.define('Investigator', {
    Investigator_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    specialization: { type: DataTypes.STRING(100), allowNull: false },
    Contact_info: { type: DataTypes.STRING(150), unique: true }
}, { tableName: 'Investigator', timestamps: false });

module.exports = Investigator;