const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');

const { REG_LINK } = require('../const/const');

const {
  findUsers,
  findUsersById,
  updateProfile,
  updateAvatar,
  returnUser,
} = require('../controllers/users');

router.get('/users/me', returnUser);
router.get('/users', findUsers);

// не особо понял что сделать даже прочитав документацию, решил пойти по способу 2

router.get('/users/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().hex().required().length(24),
  }),
}), findUsersById);

router.patch('/users/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().min(2).max(30),
  }),
}), updateProfile);

router.patch('/users/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().required().pattern(REG_LINK),
  }),
}), updateAvatar);

module.exports = router;
