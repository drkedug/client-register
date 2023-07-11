const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://<username>:<password>@64ac5f580790fe0306b1c5c8/<database-name>?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connect() {
  try {
    await client.connect();
    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
}

module.exports = {
  connect,
  // Add other database-related functions here
};