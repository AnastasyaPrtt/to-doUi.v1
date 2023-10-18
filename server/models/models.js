// const sequelize = require('../db');
// const { DataTypes } = require('sequelize');

// const User = sequelize.define('user', {
// 	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// 	email: { type: DataTypes.STRING, unique: true },
// 	password: { type: DataTypes.STRING }
// })
// const Task = sequelize.define('task', {
// 	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
// 	title: { type: DataTypes.STRING, allowNull: true },
// 	date: { type: DataTypes.STRING, allowNull: true },
// 	isChecked: { type: DataTypes.BOOLEAN, defaultValue: false }
// })
const User = require('./user.model')
const Task = require('./task.model')


User.hasMany(Task);
Task.belongsTo(User);


module.exports = {
	User,
	Task
}