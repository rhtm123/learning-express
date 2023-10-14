
const { MongoClient } = require('mongodb');


const uri = "mongodb://mongo:kRqph6q3PjYgTTxyVsir@containers-us-west-44.railway.app:7970";

// mongodb://mongo:kRqph6q3PjYgTTxyVsir@containers-us-west-44.railway.app:7970

const client = new MongoClient(uri, { useNewUrlParser: true });;

async function connectToMongoDB() {

  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToMongoDB();

module.exports = client;