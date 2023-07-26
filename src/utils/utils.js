const stringRemoveSpecialCharacters = (string) => {
  return string.replace(/[^\p{L}\p{N}\s]/gu, '');
}

const stringRemoveNumberCharacters = (string) => {
  return string.replace(/[\p{N}]/gu, '');
}

const stringRemoveSpaces = (string) => {
  return string.replace(/[\s]/gu, '');
}

const stringCorrectNameCapitalization = (str) => {
  const words = str.toLowerCase().split(' ');

  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  const result = capitalizedWords.join(' ');

  return result;
}

const dateNormalize = (dateStr) => {
  let dateParts = dateStr.toLowerCase().split('/');
  if(dateParts.length !== 3){
    dateParts = dateStr.toLowerCase().split('-');
  }
  if(dateParts.length !== 3) return false;

  if(stringRemoveNumberCharacters(dateParts[0]) !== ''
  || stringRemoveNumberCharacters(dateParts[1]) !== ''
  || stringRemoveNumberCharacters(dateParts[2]) !== ''){
    return false;
  }

  const firstValLength = dateParts[0].split('').length;
  const thirdValLength = dateParts[2].split('').length;

  if(firstValLength !== 4 && thirdValLength !== 4) return false;

  if(thirdValLength > firstValLength){
    const oldThirdVal = dateParts[2];
    dateParts[2] = dateParts[0];
    dateParts[0] = oldThirdVal;
  }

  const thirdValNumber = parseInt(dateParts[2]);
  const secondValNumber = parseInt(dateParts[1]);

  if((thirdValNumber > 30 && (secondValNumber ===  4 || secondValNumber === 6 || secondValNumber === 9 || secondValNumber === 11))
  || (thirdValNumber > 31 && (secondValNumber ===  1 || secondValNumber === 3 || secondValNumber === 5 || secondValNumber === 7 || secondValNumber === 8 || secondValNumber === 10 || secondValNumber === 12))
  || (thirdValNumber > 28 && secondValNumber === 2)
  || secondValNumber > 12){
    return false;
  } 

  const finalDate = dateParts.join('-');

  return finalDate;
}

module.exports = { stringRemoveSpecialCharacters, stringCorrectNameCapitalization, stringRemoveNumberCharacters, stringRemoveSpaces, dateNormalize };