// lib/mongodb.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("Missing MONGODB_URI in .env.local");
}

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // global prevents creating many clients during HMR in Next.js dev
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect()
      .then(c => {
        console.log("MongoClient connected (dev)");
        return c;
      })
      .catch(err => {
        console.error("MongoClient connect error (dev):", err);
        throw err;
      });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect()
    .then(c => {
      console.log("MongoClient connected (prod)");
      return c;
    })
    .catch(err => {
      console.error("MongoClient connect error (prod):", err);
      throw err;
    });
}

export default clientPromise;
