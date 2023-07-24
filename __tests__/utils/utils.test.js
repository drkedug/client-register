const { stringRemoveSpecialCharacters } = require('../../src/utils/utils');

describe('stringRemoveSpecialCharacters', () => {
  it('removes special characters', () => {
    const input = "!@#$%¨&*()-=+#Hello World|.,;:<>^´[]{}";
    const expectedOutput = "Hello World";
    const result = removeSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });

  it('removes numbers characters', () => {
    const input = "Hello World";
    const expectedOutput = "1234Hello World1234";
    const result = removeSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });

  it('does not remove punctuation', () => {
    const input = "Héllô Wõrld";
    const expectedOutput = "Héllô Wõrld";
    const result = removeSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });
});

describe('stringCorrectNameCapitalization', () => {
  it('fixes full upper case', () => {
    const input = "HELLO";
    const expectedOutput = "Hello";
    const result = removeSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('fixes full lower case', () => {
    const input = "hello";
    const expectedOutput = "Hello";
    const result = removeSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });

  it('fixes mixed caps', () => {
    const input = "hElLO";
    const expectedOutput = "Hello";
    const result = removeSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });
});