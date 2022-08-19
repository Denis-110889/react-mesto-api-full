const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { REG_LINK } = require('../const/const');

const {
  returnCards,
  createCards,
  deleteCards,
  setLike,
  unsetLike,
} = require('../controllers/cards');

router.get('/cards', returnCards);

router.post('/cards', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(REG_LINK),
  }),
}), createCards);

router.delete('/cards/:cardId', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().required().length(24),
  }),
}), deleteCards);

router.put('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().required().length(24),
  }),
}), setLike);

router.delete('/cards/:cardId/likes', celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().hex().required().length(24),
  }),
}), unsetLike);

module.exports = router;
