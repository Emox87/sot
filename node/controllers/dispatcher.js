const { MongoClient, ServerApiVersion } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_LOCAL, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const addDispatcher = async (req, res) => {
  console.log("ADD DISPATCHER");
  console.log(req.body);
  res.json(req.body);
};

const getDispatchers = async (req, res) => {
  try {
    // Connect to db
    await client.connect();
    const db = client.db("sot");
    const dispatchersCollection = db.collection("dispatchers");
    const results = await dispatchersCollection.find().toArray();
    res.status(200).json(results);
  } finally {
    client.close();
  }
};

const deleteDispatcher = async (req, res) => {
  console.log("DELETE DISPATCHER");
};

const Dispatcher = {
  addDispatcher,
  getDispatchers,
  deleteDispatcher,
};

module.exports = Dispatcher;
