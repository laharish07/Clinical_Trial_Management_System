const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Clinical_trial = sequelize.define('Clinical_trial', {
    Trial_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    Trial_name: { type: DataTypes.STRING(150), allowNull: false, unique: true },
    Start_date: { type: DataTypes.DATEONLY, allowNull: false },
    End_date: { type: DataTypes.DATEONLY, allowNull: false },
    Phase: { type: DataTypes.ENUM('Phase I', 'Phase II', 'Phase III', 'Phase IV'), allowNull: false },
    description: { type: DataTypes.TEXT }
}, { tableName: 'Clinical_trial', timestamps: false });

module.exports = Clinical_trial;