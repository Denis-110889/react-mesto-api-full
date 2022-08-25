const Card = require('../models/card');
const { ValidationError } = require('../errors/ValidationError');
const { NoValidId } = require('../errors/NoValidId');
const { NoPermission } = require('../errors/NoPermission');
// const { CastError } = require('../errors/CastError');

const returnCards = (req, res, next) => {
  Card.find()
    .then((card) => res.send(card))
    .catch((err) => next(err));
};

const createCards = (req, res, next) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => {
      res.status(201).send(card);
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('400 - Переданы некорректные данные в метод создания карточки'));
      } else {
        next(err);
      }
    });
};

const deleteCards = (req, res, next) => {
  Card.findById(req.params.cardId)
    .then((card) => {
      const owner = card.owner.toHexString();
      if (!card) {
        next(new NoValidId('404 - Карточка с указанным _id не найдена'));
      } else if (owner === req.user._id) {
        Card.findByIdAndRemove(req.params.cardId)
          .orFail(new NoValidId('404 - Карточка с указанным _id не найдена'))
          .then((cardDeleted) => res.send(cardDeleted))
          .catch((err) => { next(err); });
      } else {
        next(new NoPermission('403 — попытка удалить чужую карточку;'));
      }
    })
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new ValidationError('400 —  Карточка с указанным _id не найдена'));
      } else {
        next(err);
      }
    });
};

const setLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new NoValidId('404 - Передан несуществующий _id карточки'))
    .then((card) => {
      res.send(card);
    })
    .catch((err) => { next(err); });
};

const unsetLike = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true },
  )
    .orFail(new NoValidId('404 - Передан несуществующий _id карточки'))
    .then((card) => {
      res.send(card);
    })
    .catch((err) => { next(err); });
};

module.exports = {
  returnCards,
  createCards,
  deleteCards,
  setLike,
  unsetLike,
};
