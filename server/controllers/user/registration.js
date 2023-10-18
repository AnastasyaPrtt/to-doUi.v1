const ApiError = require('../../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../../models/models')

const registration = async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) {
			return next(ApiError.badRequest('Некорректный email или пароль'));
		}
		const candidate = await User.findOne({
			where: { email }
		});
		if (candidate) {
			return next(ApiError.badRequest('Пользователь существует'))
		};
		const hashPassword = await bcrypt.hash(password, 5);
		const user = await User.create({
			email, password: hashPassword
		});
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

module.exports = { registration }