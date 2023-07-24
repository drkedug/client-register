const express = require("express");
const { userValidation } = require("../users/user/userValidation");

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

  expressApi.post('/users-list', (req, res) => {
    
    res.sendStatus(200);
  });

  expressApi.post('/post/user', (req, res) => {
    const body = req.body;
    if(err){
      throw err;
    }
    const validationObj = userValidation(body);
    if(validationObj.valid){
      // post to db
    } else {
      res.send(validationObj);
    };
  });

  expressApi.get('/ping', (req, res) => {
    console.log('Hello World');
    res.send('Hello World');
  });

  expressApi.get(`/user/:id`, (req, res) => {
    const id = req.params.id;
    //get user in DB by passing the id
    res.send('HERES THE USER I GOT FROM THE DB');
    res.sendStatus(200);
  });

  expressApi.get(`/user/:id`, (req, res) => {
    const id = req.params.id;
    //get user in DB by passing the id
    res.send('HERES THE USER I GOT FROM THE DB');
    res.sendStatus(200);
  });
}

module.exports = { expressApi };