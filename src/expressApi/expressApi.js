const express = require("express");
const { getAllClients } = require("../users/client/getAllClients");
const { getClient } = require("../users/client/getClient");
const { postClient } = require("../users/client/postClient");

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

  expressApi.post('/clients', (req, res) => {
    const body = req.body;
    postClient(body, res);
  });

  expressApi.get(`/clients`, (req, res) => {
    getAllClients(res);
  });

  expressApi.get(`/clients/:id`, (req, res) => {
    const id = req.params.id;
    getClient(id, res);
  });
}

module.exports = { expressApi };