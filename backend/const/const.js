/* eslint-disable linebreak-style */
const { NODE_ENV, JWT_SECRET } = process.env;

module.exports.REG_LINK = /^(https?:\/\/)(www\.)?([\w-.~:/?#[\]@!$&')(*+,;=]*\.?)*\.{1}[\w]{2,8}(\/([\w-.~:/?#[\]@!$&')(*+,;=])*)?/;

module.exports.secretKey = NODE_ENV === 'production' ? JWT_SECRET : 'secret-key';
