const ApiError = require('../../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../models/models')

const login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({
			where: { email }
		});
		if (!user) {
			return next(ApiError.badRequest('Пользователь не существует'))
		};
		let comparePassword = bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(ApiError.badRequest('Указан неверный пароль'))
		};
		const token = jwt.sign({
			id: user.id,
			email: user.email
		},
			process.env.SECRET_KEY,
			{ expiresIn: '24h' })
		return res.json({ token })

	} catch (error) {
		return next(ApiError.badRequest('Произошла ошибка'))
	}
}

module.exports = { login }