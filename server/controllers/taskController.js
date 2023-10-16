const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const ApiError = require('../error/ApiError');
const { Task } = require('../models/models');

class TaskController {
	async create(req, res) {
		const { id } = req.params
		const { title, date } = req.body;
		const task = await Task.create({
			title,
			date,
			userId: id
		})
		return res.json({ task })
	};

	async getAll(req, res, next) {
		let { userId, filterBy, limit, page } = req.query
		page = page || 1
		limit = limit || 5
		let offset = page * limit - limit
		if (filterBy == 'all') {
			const tasks = await Task.findAndCountAll({ where: { userId }, order: [['createdAt', 'DESC']], limit, offset })
			if (!tasks) {
				return next(ApiError.badRequest('У пользователя еще нет задач'))
			}
			return res.json({ tasks })
		}

		if (filterBy == 'done') {
			const tasks = await Task.findAndCountAll({ where: { userId, isChecked: true }, limit, offset })
			if (!tasks) {
				return next(ApiError.badRequest('У пользователя еще нет задач'))
			}
			return res.json({ tasks })
		}

		if (filterBy == 'undone') {
			const tasks = await Task.findAndCountAll({ where: { userId, isChecked: false }, limit, offset })
			if (!tasks) {
				return next(ApiError.badRequest('У пользователя еще нет задач'))
			}
			return res.json({ tasks })
		}

		if (filterBy == 'today') {
			const dateNow = String(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + new Date().getMonth() + 1 : new Date().getMonth() + 1) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()));
			const tasks = await Task.findAndCountAll({ where: { userId, date: dateNow }, limit, offset })
			if (!tasks) {
				return next(ApiError.badRequest('У пользователя еще нет задач'))
			}
			return res.json({ tasks })
		}
		if (filterBy == 'date') {
			const tasks = await Task.findAndCountAll({ where: { userId }, order: [['date', 'ASC']], limit, offset })
			if (!tasks) {
				return next(ApiError.badRequest('У пользователя еще нет задач'))
			}
			return res.json({ tasks })
		}


	};

	async delete(req, res, next) {
		const { id } = req.params;

		const deleteTask = await Task.destroy({ where: { id } })
		return res.json({ deleteTask })
	}
	async update(req, res) {
		const { id } = req.params;
		const task = req.body;
		const updatedTask = await Task.update(task, { where: { id } })
		return res.json({ updatedTask })
	}

	async filterToday(req, res, next) {
		const { userId } = req.query;
		const dateNow = String(new Date().getFullYear() + '-' + (new Date().getMonth() + 1 < 10 ? '0' + new Date().getMonth() + 1 : new Date().getMonth() + 1) + '-' + (new Date().getDate() < 10 ? '0' + new Date().getDate() : new Date().getDate()));

		const tasks = await Task.findAll({ where: { userId: +userId, date: dateNow } })
		if (!tasks) {
			return next(ApiError.badRequest('нет на сегодня задач'))
		}
		return res.json({ tasks })
	}

}

module.exports = new TaskController()