import { MongoClient } from "mongodb";

const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_pass}@cluster0.rmpdbzj.mongodb.net/?appName=Cluster0`;

let client;
let clientPromise;

// Use global variable in development to avoid multiple connections
if (!global._mongoClientPromise) {
  client = new MongoClient(uri);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
