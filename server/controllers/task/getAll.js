const ApiError = require('../../error/ApiError');
const dateNow = require('../../dateNow')
const { Task } = require('../../models/models');

const getAll = async (req, res, next) => {
	try {
		let { userId, limit, page, filterBy } = req.query
		page = page || 1
		limit = limit || 5

		const { where, order } = {
			where: filterBy === 'All' || filterBy === 'Date' ? {
				userId
			} : filterBy === 'Today' ? {
				userId,
				date: dateNow
			} : {
				userId,
				isChecked: filterBy
			},
			order: [
				filterBy === 'Date' ? [
					'date', 'ASC'
				] :
					[
						'createdAt', 'DESC'
					]
			]
		}
		const tasks = await Task.findAndCountAll({
			where,
			order,
			limit,
			offset: page * limit - limit
		})
		if (!tasks) {
			return next(ApiError.badRequest('У пользователя еще нет задач'))
		}
		return res.json({ tasks })

	} catch (error) {
		return next(ApiError.badRequest('Произошла ошибка'))
	}
}

module.exports = { getAll }