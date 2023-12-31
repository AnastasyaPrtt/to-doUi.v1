const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/models')

class UserController {
	async registration(req, res, next) {
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
	}

	async login(req, res, next) {
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
	}

	async check(req, res) {
		const token = jwt.sign({ id: req.user.id, email: req.user.email },
			process.env.SECRET_KEY,
			{ expiresIn: '24h' })
		return res.json({ token })
	}
}

module.exports = new UserController()