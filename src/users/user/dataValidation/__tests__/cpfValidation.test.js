const { cpfValidation } = require('../cpfValidation');

describe('cpfValidation', () => {
  it('returns valid to correct cpf', () => {
    const input = "108.025.759-43";
    const expectedOutput = {isValid: true, value: "108.025.759-43"};
    const result = cpfValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns valid to cpf that is numbers only but correct', () => {
    const input = "10802575943";
    const expectedOutput = {isValid: true, value: "108.025.759-43"};
    const result = cpfValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns invalid to fake repeat digit cpf', () => {
    const input = "111.111.111-11";
    const expectedOutput = {isValid: false, value: "111.111.111-11"};
    const result = cpfValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns invalid to fake random cpf', () => {
    const input = "123.732.324-67";
    const expectedOutput = {isValid: false, value: "123.732.324-67"};
    const result = cpfValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns invalid to fake random string', () => {
    const input = "dasdsadasdsdadsasd";
    const expectedOutput = {isValid: false, value: "dasdsadasdsdadsasd"};
    const result = cpfValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns invalid to fake random 11 char string', () => {
    const input = "aaabbbcccdd";
    const expectedOutput = {isValid: false, value: "aaabbbcccdd"};
    const result = cpfValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
});