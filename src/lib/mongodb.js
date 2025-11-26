import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
// process.env.MONGODB_URI ||
// `mongodb+srv://${process.env.DB_User}:${process.env.DB_pass}@cluster0.rmpdbzj.mongodb.net/coursehub?retryWrites=true&w=majority`;

let client;
let clientPromise;

if (!uri) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

console.log("MongoDB URI:", uri ? "Exists" : "Missing");

try {
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, {
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
      });
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    client = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    clientPromise = client.connect();
  }
} catch (error) {
  console.error("MongoDB connection error:", error);
  throw error;
}

export default clientPromise;
