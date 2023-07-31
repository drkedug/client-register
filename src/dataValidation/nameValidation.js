const { stringRemoveSpecialCharacters, stringRemoveNumberCharacters, stringCorrectNameCapitalization } = require("../utils/utils");

const nameValidation = (name) => {
  const validationObj = {value: name, isCapitalized: true, containNumbers: false, hasSpecialCharacters: false, isValid: true};
  let nameMock = stringRemoveNumberCharacters(name);
  nameMock = stringRemoveSpecialCharacters(nameMock);
  if(nameMock !== stringCorrectNameCapitalization(nameMock)){
    validationObj.isCapitalized = false;
    validationObj.isValid = false;
  }

  nameMock = stringCorrectNameCapitalization(name);
  nameMock = stringRemoveSpecialCharacters(nameMock);
  if(nameMock !== stringRemoveNumberCharacters(nameMock)){
    validationObj.containNumbers = true;
    validationObj.isValid = false;
  }

  nameMock = stringRemoveNumberCharacters(name);
  nameMock = stringCorrectNameCapitalization(nameMock);
  if(nameMock !== stringRemoveSpecialCharacters(nameMock)){
    validationObj.hasSpecialCharacters = true;
    validationObj.isValid = false;
  }

  return validationObj;
}

module.exports = { nameValidation };