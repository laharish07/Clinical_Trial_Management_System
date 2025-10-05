const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Site = sequelize.define('Site', {
    Site_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: DataTypes.STRING(100), allowNull: false },
    address: { type: DataTypes.STRING(255), allowNull: false },
    Contact_info: { type: DataTypes.STRING(150), unique: true }
}, { tableName: 'Site', timestamps: false });

module.exports = Site;