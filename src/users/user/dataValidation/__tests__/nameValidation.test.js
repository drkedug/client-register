const { nameValidation } = require('../nameValidation');

describe('nameValidation', () => {
  it('returns invalid to special characters in name', () => {
    const input = "!@#$%¨&*()-=+#Hello World|.,;:<>^´[]{}";
    const expectedOutput = {value: "!@#$%¨&*()-=+#Hello World|.,;:<>^´[]{}", isCapitalized: true, containNumbers: false, hasSpecialCharacters: true, isValid: false};
    const result = nameValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });

  it('returns invalid to numbers in name', () => {
    const input = "1234Hello World5678";
    const expectedOutput = {value: "1234Hello World5678", isCapitalized: true, containNumbers: true, hasSpecialCharacters: false, isValid: false};
    const result = nameValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns invalid to wrong capitalization in name', () => {
    const input = "HelLo WoRld";
    const expectedOutput = {value: "HelLo WoRld", isCapitalized: false, containNumbers: false, hasSpecialCharacters: false, isValid: false};
    const result = nameValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns valid to punctuated name', () => {
    const input = "Héllo Wôrld";
    const expectedOutput = {value: "Héllo Wôrld", isCapitalized: true, containNumbers: false, hasSpecialCharacters: false, isValid: true};
    const result = nameValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });

  it('returns valid name with spaces', () => {
    const input = "Hello World";
    const expectedOutput = {value: "Hello World", isCapitalized: true, containNumbers: false, hasSpecialCharacters: false, isValid: true};
    const result = nameValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
});