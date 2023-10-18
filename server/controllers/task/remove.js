const ApiError = require('../../error/ApiError');
const { Task } = require('../../models/models');

const remove = async (req, res, next) => {
	try {
		const { id } = req.params;
		const task = await Task.destroy({ where: { id } })
		return res.json({ task })
	} catch (error) {
		return next(ApiError.badRequest('Произошла ошибка'))
	}
}

module.exports = { remove }