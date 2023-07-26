const { stringRemoveSpecialCharacters, stringCorrectNameCapitalization, stringRemoveNumberCharacters, stringRemoveSpaces, dateNormalize } = require('../utils');

describe('stringRemoveSpecialCharacters', () => {
  it('removes special characters', () => {
    const input = "!@#$%¨&*()-=+#Hello World|.,;:<>^´[]{}";
    const expectedOutput = "Hello World";
    const result = stringRemoveSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });

  it('does not remove punctuation', () => {
    const input = "Héllô Wõrld";
    const expectedOutput = "Héllô Wõrld";
    const result = stringRemoveSpecialCharacters(input);
    expect(result).toBe(expectedOutput);
  });
});

describe('stringRemoveNumberCharacters', () => {
  it('removes number characters', () => {
    const input = "1234567890Hello World123456789";
    const expectedOutput = "Hello World";
    const result = stringRemoveNumberCharacters(input);
    expect(result).toBe(expectedOutput);
  });

  it('removes only number characters', () => {
    const input = "1!@2#$%3¨&*4()-5=+6#Hé7llô8 Wo9rld10|.11,;:<12>^´13[]{}14";
    const expectedOutput = "!@#$%¨&*()-=+#Héllô World|.,;:<>^´[]{}";
    const result = stringRemoveNumberCharacters(input);
    expect(result).toBe(expectedOutput);
  });
});

describe('stringCorrectNameCapitalization', () => {
  it('fixes full upper case', () => {
    const input = "HELLO";
    const expectedOutput = "Hello";
    const result = stringCorrectNameCapitalization(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('fixes full lower case', () => {
    const input = "hello";
    const expectedOutput = "Hello";
    const result = stringCorrectNameCapitalization(input);
    expect(result).toBe(expectedOutput);
  });

  it('fixes mixed caps', () => {
    const input = "hElLO";
    const expectedOutput = "Hello";
    const result = stringCorrectNameCapitalization(input);
    expect(result).toBe(expectedOutput);
  });

  it('first letter after space is also capitalized', () => {
    const input = "hello world";
    const expectedOutput = "Hello World";
    const result = stringCorrectNameCapitalization(input);
    expect(result).toBe(expectedOutput);
  });

  it('other letters after space are not capitalized', () => {
    const input = "hELLO wORLD";
    const expectedOutput = "Hello World";
    const result = stringCorrectNameCapitalization(input);
    expect(result).toBe(expectedOutput);
  });

  it('works with more than 2 words', () => {
    const input = "hELLO wORLD aGaIN";
    const expectedOutput = "Hello World Again";
    const result = stringCorrectNameCapitalization(input);
    expect(result).toBe(expectedOutput);
  });
});

describe('stringRemoveSpaces', () => {
  it('removes spaces from beginning', () => {
    const input = " HELLO";
    const expectedOutput = "HELLO";
    const result = stringRemoveSpaces(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('removes spaces from end', () => {
    const input = "HELLO ";
    const expectedOutput = "HELLO";
    const result = stringRemoveSpaces(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('removes spaces from middle', () => {
    const input = "HE LLO ";
    const expectedOutput = "HELLO";
    const result = stringRemoveSpaces(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('removes tabs from middle', () => {
    const input = "HEL  LO ";
    const expectedOutput = "HELLO";
    const result = stringRemoveSpaces(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('removes newlines from middle', () => {
    const input = "HELL\nO";
    const expectedOutput = "HELLO";
    const result = stringRemoveSpaces(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('removes all at once', () => {
    const input = "   \nH\nEL   L\nO   \n";
    const expectedOutput = "HELLO";
    const result = stringRemoveSpaces(input);
    expect(result).toBe(expectedOutput);
  });
});

describe('dateNormalize', () => {
  it('recognizes its a common phrase, returns false', () => {
    const input = "dia mundial das bixa";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('recognizes its a common phrase, returns false', () => {
    const input = "dia-mundial-bixa";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('recognizes its a common phrase, returns false', () => {
    const input = "dia/mundial/bixa";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('recognizes fake year date, returns false', () => {
    const input = "199721/03/15";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake year date, returns false', () => {
    const input = "15/03/199721";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake year date, returns false', () => {
    const input = "15/03/1";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake year date, returns false', () => {
    const input = "1/03/15";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake month date, returns false', () => {
    const input = "15/14/1997";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake month date, returns false', () => {
    const input = "1997/14/15";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake day date, returns false', () => {
    const input = "32/03/1997";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('recognizes fake day date, returns false', () => {
    const input = "1997/03/32";
    const expectedOutput = false;
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('returns correct date', () => {
    const input = "1997-03-15";
    const expectedOutput = "1997-03-15";
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('returns correct date', () => {
    const input = "1997/03/15";
    const expectedOutput = "1997-03-15";
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('returns correct date', () => {
    const input = "15-03-1997";
    const expectedOutput = "1997-03-15";
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
  
  it('returns correct date', () => {
    const input = "15/03/1997";
    const expectedOutput = "1997-03-15";
    const result = dateNormalize(input);
    expect(result).toBe(expectedOutput);
  });
});