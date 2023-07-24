const { dataConstruct } = require('./dataValidation/dataConstruct');

const userValidation = (body) => {
  const data = dataConstruct(body);
}

module.exports = { userValidation };