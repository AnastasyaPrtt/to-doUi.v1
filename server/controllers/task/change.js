const ApiError = require('../../error/ApiError');
const { Task } = require('../../models/models');

const change = async (req, res, next) => {
	try {
		const { id } = req.params;
		const task = req.body;
		const updatedTask = await Task.update(task, { where: { id } })
		return res.json({ updatedTask })
	} catch (error) {
		return next(ApiError.badRequest('Произошла ошибка'))
	}
}

module.exports = { change }