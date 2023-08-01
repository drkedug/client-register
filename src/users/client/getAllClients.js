const getAllClients = (con, res) => {
  const sql = "SELECT * FROM clientes";
  try {
    con.query(sql, function (err, result) {
      if (err) {
        res.status(500).send("ERRO AO BUSCAR CLIENTES NO BANCO!" + err);
      } else {
        res.send(result);
      }
      console.log("Result: " + result);

      // Move the con.end() call inside the callback, after sending the response
      con.end(function (err) {
        if (err) {
          console.error("Error closing the database connection:", err);
        } else {
          console.log("DB DESCONECTADO COM SUCESSO");
        }
      });
    });
  } catch (err) {
    res.status(500).send("ERRO AO BUSCAR CLIENTES NO BANCO!" + err);
  }
};

module.exports = { getAllClients };
