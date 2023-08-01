const { newClient } = require("./newClient");

const postClient = (body, res) => {
  const client = newClient(body);
  if(client.isValid){
    client.insert(res);
  } else {
    //Eu sei que é melhor fazer isso no front mandando o objeto, porém vou fazer aqui pra facilitar o entendimento do problema, se está chegando certo por enquanto
    let postingProblems = "";
    if(!client.name.isValid){
      postingProblems += "Invalid Name: Must be capitalized, contain no special characters or numbers.\n";
    }
    if(!client.surname.isValid){
      postingProblems += "Invalid Surname: Must be capitalized, contain no special characters or numbers.\n";
    }
    if(!client.birthdate.isValid){
      postingProblems += "Invalid Birthdate: Must be a valid date, with 4 digits year, and day/month format.\n";
    }
    if(!client.cpf.isValid){
      postingProblems += "Invalid CPF: Must be unique and valid.\n";
    }
    res.status(400).send(`${postingProblems}`);
  };
}

module.exports = { postClient };