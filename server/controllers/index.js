const { login } = require('./user/login');
const { registration } = require('./user/registration');

const { create } = require('./task/create');
const { remove } = require('./task/remove');
const { change } = require('./task/change');
const { getAll } = require('./task/getAll');

module.exports = { create, remove, change, getAll, login, registration }