const Card = require('../models/card');
const BadRequestError = require('../errors/bad-request-err');
const NotFoundError = require('../errors/not-found-err');
const ForbiddenError = require('../errors/forbidden-err');

const checkCard = (card, res) => {
  if (card) {
    return res.send(card);
  }
  throw new NotFoundError('Карточка с указанным _id не найдена');
};

const createCard = (req, res, next) => {
  const { _id } = req.user;
  const { name, link } = req.body;

  Card.create({ name, link, owner: _id })
    .then((dataCard) => {
      Card.findOne(dataCard)
        .populate(['likes', 'owner'])
        .then((card) => {
          res.send(card);
        })
        .catch(next);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

const getAllCards = (req, res, next) => {
  Card.find({})
    .populate(['likes', 'owner'])
    // если убрать populate, то лайки некорректно работают на фронте
    .then((cards) => res.send(cards))
    .catch(next);
};

const deleteCard = (req, res, next) => {
  const { cardId } = req.params;

  Card.findById(cardId)
    .then((card) => {
      if (card == null) {
        throw new NotFoundError('Карточка с указанным _id не найдена');
      }
      if (!(card.owner._id.toString() === req.user._id)) {
        throw new ForbiddenError('Невозможно удалить чужую карточу');
      }
      return Card.findByIdAndRemove(cardId)
        .then((cardDelete) => {
          res.send(cardDelete);
        })
        .catch(next);
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .populate(['likes', 'owner'])
    // если убрать populate, то лайки некорректно работают на фронте
    .then((card) => checkCard(card, res))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .populate(['likes', 'owner'])
    // если убрать populate, то лайки некорректно работают на фронте
    .then((card) => checkCard(card, res))
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные данные'));
      } else {
        next(err);
      }
    });
};

module.exports = {
  createCard,
  getAllCards,
  deleteCard,
  likeCard,
  dislikeCard,
};
