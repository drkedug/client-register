const { nameValidation }       = require('./nameValidation');
const { birthdateValidation }  = require('./birthdateValidation');
const { cpfValidation }        = require('./cpfValidation');

const dataConstruct = (body) => {
  const data = {};
  const name       = body.name;
  const surname    = body.surname;
  const birthdate  = body.birthdate;
  const cpf        = body.cpf;
  const address    = body.address;
  const profession = body.profession;

  data.name = nameValidation(name)
  data.surname = nameValidation(surname);
  data.cpf = cpfValidation(cpf);
  data.birthdate = birthdateValidation(birthdate);
  data.address = address;
  data.profession = profession;

  return data;
}

module.exports = { dataConstruct };