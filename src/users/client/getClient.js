const { dbCreateConnection } = require("../../database/dbCreateConnection");

const getClient = (id, res) => {
    var sql = `SELECT * FROM clientes WHERE id=${id}`;
    const dbClientConnection = dbCreateConnection();
    try {
        dbClientConnection.query(sql, function (err, result) {
        if (err) {
          res.status(400).send("ERROR CONNECTING TO DB! " + err);
        } else {
          res.status(200).send(result);
          console.log("Result: " + result);
        }
      });
    } catch (err) {
      res.status(400).send("ERRO AO INSERIR NO BANCO!  " + err);
    }
    dbClientConnection.end(function(err) {
      if(err) {
        res.send(err);
      }
      console.log("DB DESCONECTADO COM SUCESSO");
    });
}

module.exports = { getClient };