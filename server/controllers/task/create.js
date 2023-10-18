const ApiError = require('../../error/ApiError');
const { Task } = require('../../models/models');

const create = async (req, res, next) => {
	try {
		const { id } = req.params
		const { title, date } = req.body;
		if (!title || !date) {
			return next(ApiError.badRequest('Не заполнены все поля'));
		}
		const task = await Task.create({
			title,
			date,
			userId: id
		})
		return res.json({ task })
	} catch (error) {
		return next(ApiError.badRequest('Произошла ошибка'))
	}
}

module.exports = { create }