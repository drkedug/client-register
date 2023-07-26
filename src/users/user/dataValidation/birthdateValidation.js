const { dateNormalize } = require("../../../utils/utils");

const birthdateValidation = (birthdate) => {
  const data = {value: birthdate, isValid: false};
  const normalizedDate = dateNormalize(birthdate);
  if(normalizedDate){
    data.isValid = true;
    data.value = new Date(normalizedDate);
  }

  return data;
}

module.exports = { birthdateValidation };