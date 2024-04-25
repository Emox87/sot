const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_LOCAL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const getLocations = async (req, res) => {
  try {
    // Connect to db
    await client.connect();
    const db = client.db("sot");
    const locationsCollection = db.collection("locations");
    const results = await locationsCollection.find().toArray();
    res.status(200).json(results);
  } finally {
    client.close();
  }
};

const Location = {
  getLocations,
};

module.exports = Location;
