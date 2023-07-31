const { dataConstruct } = require('../dataConstruct');

const bodyValid = {
  name: "Derek",
  surname: "Eduardo Gonçalves",
  birthdate: "15/03/1997",
  cpf: "108.025.759-43",
  address: "Paes Leme 11 ap 1608",
  profession: "works with the C#",
  isValid: true,
}

const bodyInvalid = {
  name: "the wr1ong5 der'ek",
  surname: "EdUardo gonÇalves",
  birthdate: "quinze março 97",
  cpf: "11111111111",
  address: "Paes Leme 11 ap 1608",
  profession: "works with the C#",
  isValid: false,
}

describe('dataConstruct', () => {
  it('returns data correctly constructed with everything valid', () => {
    const input = bodyValid;
    const expectedOutput = { 
      name: {
        value: "Derek", 
        isCapitalized: true, 
        containNumbers: false, 
        hasSpecialCharacters: false, 
        isValid: true
      },
      surname: {
        value: "Eduardo Gonçalves", 
        isCapitalized: true, 
        containNumbers: false, 
        hasSpecialCharacters: false, 
        isValid: true
      },
      birthdate: {
        value: new Date("1997-03-15"), 
        isValid: true
      },
      cpf: {
        value: "108.025.759-43",
        isValid: true,
      },
      address: "Paes Leme 11 ap 1608",
      profession: "works with the C#",
      isValid: true,
    }
    const result = dataConstruct(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns data correctly constructed with everything invalid', () => {
    const input = bodyInvalid;
    const expectedOutput = { 
      name: {
        value: "the wr1ong5 der'ek", 
        isCapitalized: false, 
        containNumbers: true, 
        hasSpecialCharacters: true, 
        isValid: false
      },
      surname: {
        value: "EdUardo gonÇalves", 
        isCapitalized: false, 
        containNumbers: false, 
        hasSpecialCharacters: false, 
        isValid: false
      },
      birthdate: {
        value: "quinze março 97", 
        isValid: false
      },
      cpf: {
        value: "11111111111",
        isValid: false,
      },
      address: "Paes Leme 11 ap 1608",
      profession: "works with the C#",
      isValid: false,
    }
    const result = dataConstruct(input);
    expect(result).toStrictEqual(expectedOutput);
  });
});