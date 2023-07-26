const { birthdateValidation } = require('../birthdateValidation');

describe('birthdateValidation', () => {
  it('returns invalid to wrong date value', () => {
    const input = "dia mundial das bixa";
    const expectedOutput = {value: "dia mundial das bixa", isValid: false};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns a date to correct date value', () => {
    const input = "1997/03/15";
    const expectedOutput = {value: new Date("1997-03-15"), isValid: true};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns a date to correct date value', () => {
    const input = "15/03/1997";
    const expectedOutput = {value: new Date("1997-03-15"), isValid: true};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
  
  it('returns a date to correct date value', () => {
    const input = "15-03-1997";
    const expectedOutput = {value: new Date("1997-03-15"), isValid: true};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });

  it('returns invalid to absurd date', () => {
    const input = "97/97/97";
    const expectedOutput = {value: "97/97/97", isValid: false};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });

  it('returns invalid to absurd date', () => {
    const input = "1997/1997/1997";
    const expectedOutput = {value: "1997/1997/1997", isValid: false};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });

  it('returns invalid to absurd date', () => {
    const input = "05/05/05";
    const expectedOutput = {value: "05/05/05", isValid: false};
    const result = birthdateValidation(input);
    expect(result).toStrictEqual(expectedOutput);
  });
});