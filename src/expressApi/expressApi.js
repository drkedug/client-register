const express = require("express");
const { dbCreateConnection } = require("../database/dbCreateConnection");
const { getAllClients } = require("../users/client/getAllClients");
const { newClient } = require("../users/client/newClient");

expressApi = () => {
  const expressApi = express();
  //adding midware to de-stringfy every json that comes from body
  expressApi.use(express.json());

  const port = 3005;

  expressApi.listen(port, (err) => {
    if (err) {
        throw err;
    }
    console.log('Server started on port ' + port);
  });

  expressApi.post('/users', (req, res) => {
    const body = req.body;
    const client = newClient(body);
    if(client.isValid){
      const dbClientConnection = dbCreateConnection();

      dbClientConnection.connect(function(err) {
        if (err) {
          console.log(err);
        } else {
          console.log("Connected to db!");
          client.insert(dbClientConnection, res);
        }
      });
    } else {
      res.send(client);
    };
  });

  expressApi.get(`/users`, (req, res) => {
    const dbClientConnection = dbCreateConnection();
      
    dbClientConnection.connect(function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log("Connected to db!");
        const clients = getAllClients(dbClientConnection, res);
      }
    });
  });

  expressApi.get(`/users/:id`, (req, res) => {
    const id = req.params.id;
    //get user in DB by passing the id
    res.send('HERE\'S THE USER I GOT FROM THE DB');
  });
}

module.exports = { expressApi };