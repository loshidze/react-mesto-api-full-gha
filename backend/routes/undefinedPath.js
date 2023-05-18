const undefinedPathRouter = require('express').Router();
const NotFoundError = require('../errors/not-found-err');

const undefinedPath = (req, res, next) => {
  next(new NotFoundError('неправильный путь'));
};

undefinedPathRouter.all('/', undefinedPath);

module.exports = undefinedPathRouter;
