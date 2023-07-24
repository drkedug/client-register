const nameValidation = (name) => {
  const validationObj = {isString: false, containSpaces: true, isCapitalized: false, hasSpecialCharacters: true};

  if(name && name.typeof === 'string'){
    validationObj.isString = true;

    const testNameTrim = name.trim();
    if(name === testNameTrim){
      validationObj.containSpaces = false;
    }

    const firstLetter = name.charAt(0);
    if(firstLetter === firstLetter.toUpperCase()){
      validationObj
    }
  }
}

module.exports = { nameValidation };