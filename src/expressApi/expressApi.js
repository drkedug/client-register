const express = require("express");
const { dbCreateConnection } = require("../database/dbCreateConnection");
const { newClient } = require("../users/client/newClient");

expressApi = () => {
  const expressApi = express();
  //adding midware to de-stringfy every json that comes from body
  expressApi.use(express.json());

  const port = 3005;

  const dbClientConnection = dbCreateConnection();

  expressApi.listen(port, (err) => {
    if (err) {
        throw err;
    }
      console.log('Server started on port ' + port);
  });

  expressApi.post('/users-list', (req, res) => {
    
    res.sendStatus(200);
  });

  expressApi.post('/users', (req, res) => {
    const body = req.body;
    const client = newClient(body);
    if(client.isValid){

      dbClientConnection.connect(function(err) {
        if (err) throw err;
        console.log("Connected to db!");
        client.insert(dbClientConnection, res);
      });
    } else {
      res.send(client);
    };
  });

  expressApi.get('/ping', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
  });

  expressApi.get(`/users`, (req, res) => {
    const id = req.params.id;
    //get user in DB by passing the id
    res.send('HERE\'S THE USER I GOT FROM THE DB');
    res.sendStatus(200);
  });

  expressApi.get(`/users/:id`, (req, res) => {
    const id = req.params.id;
    //get user in DB by passing the id
    res.send(`DB ID`);
    res.sendStatus(200);
  });
}

module.exports = { expressApi };