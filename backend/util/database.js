import { MongoClient } from "mongodb";

let client;
let db;

const mongoConnect = async () => {
  if(db) return db;

  try {
    if(!client) {
      client = new MongoClient(process.env.MONGO_URI);

      await client.connect();
      console.log('Connected to MongoDB');
    }

    db = client.db(process.env.MONGO_DB);
    return db;
  } catch(err) {
    console.log('Error connecting to MongoDB:', err);
    throw err;
  }
}

export default mongoConnect;