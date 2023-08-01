const { nameValidation }      = require('../../dataValidation/nameValidation');
const { birthdateValidation } = require('../../dataValidation/birthdateValidation');
const { cpfValidation }       = require('../../dataValidation/cpfValidation');
const { dbCreateConnection } = require('../../database/dbCreateConnection');

const newClient = (body) => {
  const obj = {};
  const name       = body.name;
  const surname    = body.surname;
  const birthdate  = body.birthdate;
  const cpf        = body.cpf;
  const address    = body.address;
  const profession = body.profession;

  obj.name = nameValidation(name);
  obj.surname = nameValidation(surname);
  obj.cpf = cpfValidation(cpf);
  obj.birthdate = birthdateValidation(birthdate);
  obj.address = {value: address};
  obj.profession = {value: profession};

  obj.isValid = (obj.name.isValid && obj.surname.isValid && obj.cpf.isValid && obj.birthdate.isValid);

  obj.insert = (res) => {
    var sql = "INSERT INTO clientes (nome, sobrenome, cpf, data_nascimento, endereco, profissao)";
    sql += `VALUES("${obj.name.value}", "${obj.surname.value}", "${obj.cpf.value}", "${obj.birthdate.value}", "${obj.address.value}", "${obj.profession.value}")`;
    const dbClientConnection = dbCreateConnection();
    try {
      dbClientConnection.query(sql, function (err, result) {
        if (err) {
          res.status(400).send("ERROR CONNECTING TO DB! " + err);
        } else {
          res.send("CLIENTE INSERIDO COM SUCESSO");
          console.log("Result: " + result);
        }
      });
    } catch (err) {
      res.status(400).send("ERRO AO INSERIR NO BANCO! " + err);
    }
    dbClientConnection.end(function(err) {
      if(err) {
        res.send(err);
      }
      console.log("DB DESCONECTADO COM SUCESSO");
    });
  }

  return obj;
}


module.exports = { newClient };