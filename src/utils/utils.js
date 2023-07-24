const stringRemoveSpecialCharacters = (string) => {
  return string.replace(/[^a-zA-Z]/g, '');
}

const stringCorrectNameCapitalization = (string) => {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

module.exports = { stringRemoveSpecialCharacters, stringCorrectNameCapitalization };