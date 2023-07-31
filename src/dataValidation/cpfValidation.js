const cpfValidation = (cpf) => {
  const data = {value: cpf, isValid: false}
  cpf = cpf.replace(/[^\d]/g, '');

  if (cpf.length !== 11) {
    return data;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return data;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let digit1 = (remainder === 10 || remainder === 11) ? 0 : remainder;

  if (digit1 !== parseInt(cpf.charAt(9))) {
    return data;
  }

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  let digit2 = (remainder === 10 || remainder === 11) ? 0 : remainder;

  if (digit2 !== parseInt(cpf.charAt(10))) {
    return data;
  }

  const part1 = cpf.substring(0, 3);
  const part2 = cpf.substring(3, 6);
  const part3 = cpf.substring(6, 9);
  const part4 = cpf.substring(9, 11);

  const cpfFinal = `${part1}.${part2}.${part3}-${part4}`;

  data.isValid = true;
  data.value = cpfFinal;

  return data;
}

module.exports = { cpfValidation };