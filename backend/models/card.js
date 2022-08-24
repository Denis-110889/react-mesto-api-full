const mongoose = require('mongoose');

const { REG_LINK } = require('../const/const');

const cardSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [2, 'Должно быть не меньше 2, имеется {VALUE}'],
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(link) {
        return REG_LINK.test(link);
      },
      message: () => 'Неверный формат ссылки на изображение',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    required: true,
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
