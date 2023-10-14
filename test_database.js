
// connection 


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

// insert a data 

async function insertuser(user) {
    let usersCollection = client.db("new_db").collection('users');

     const result = await usersCollection.insertOne(user);
    //  console.log(result.ops[0]);
     console.log("User inserted successfully");
}

insertuser({"name":"Rohit Maurya","email":"rohit@gmail.com"})


// module.exports = client;

// client.close();