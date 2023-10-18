const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Task = sequelize.define('task', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	title: { type: DataTypes.STRING, allowNull: true },
	date: { type: DataTypes.STRING, allowNull: true },
	isChecked: { type: DataTypes.BOOLEAN, defaultValue: false }
})



module.exports = Task