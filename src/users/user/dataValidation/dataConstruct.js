const { nameValidation }       = require('./nameValidation');
const { surnameValidation }    = require('./surnameValidation');
const { birthdateValidation }  = require('./birthdateValidation');
const { cpfValidation }        = require('./cpfValidation');
const { addressValidation }    = require('./addressValidation');
const { professionValidation } = require('./professionValidation');

const dataConstruct = (body) => {
  const validationArray = [];
  const name       = body.name;
  const surname    = body.surname;
  const birthdate  = body.birthdate;
  const cpf        = body.cpf;
  const address    = body.address;
  const profession = body.profession;

  validationArray.push({ name: nameValidation(name) });
  validationArray.push({ cpf: cpfValidation(cpf) });
  validationArray.push({ birthdate: birthdateValidation(birthdate) });
  validationArray.push({ surname: surnameValidation(surname) });
  validationArray.push({ address: addressValidation(address) });
  validationArray.push({ profession: professionValidation(profession) });

  return validationArray;
}

module.exports = { dataConstruct };