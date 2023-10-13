const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const { Task } = require('../models/models');

class TaskController {
	async create(req, res) {
		const { title, date } = req.body;
		const { id } = req.params;

		const task = await Task.create({
			title,
			date,
			userId: id
		})
		return res.json(task)
	}
	async getAll(req, res, next) {

		let { id, limit, page } = req.query;
		page = page || 1;
		limit = limit || 5;
		let offset = page * limit - limit;

		const tasks = await Task.findAndCountAll({ where: { userId: id }, limit, offset })
		if (!tasks) {
			return next(ApiError.badRequest('У пользователя еще нет задач'))
		}
		return res.json(tasks)

	}
	// async getAll(req, res, next) {

	// 	// const token = req.headers.authorization.split(' ')[1];
	// 	// const decode = jwt.decode(token)
	// 	// const userId = decode.id;
	// 	const { userId } = req.params;

	// 	const tasks = await Task.findAll({ where: { userId } })
	// 	if (tasks) {
	// 		next(ApiError.badRequest('В бд нет задач'))
	// 	}
	// 	return res.json(tasks)

	// }

	// async update(req, res) {
	// 	try {
	// 		const task = req.body;
	// 		if (!task.id) {
	// 			res.status(400).json({ message: 'Id не указан' })
	// 		}
	// 		const updatedTask = await Task.upsert(task, { where: task.id })
	// 		return res.json({ updatedTask })

	// 	} catch (error) {
	// 		return res.json(error)
	// 	}
	// }
	// async delete(req, res) {
	// 	try {
	// 		const task = req.body;
	// 		if (!task.id) {
	// 			res.status(400).json({ message: 'Id не указан' })
	// 		}
	// 		const deleteTask = await Task.destroy({ where: { id: task.id } })
	// 		return res.json(deleteTask)
	// 	} catch (error) {
	// 		return res.json(error)
	// 	}
	// }
}

module.exports = new TaskController()