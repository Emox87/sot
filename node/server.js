require("dotenv").config();

// NODE CORE MODULES
const fs = require("fs");

// NPM DEPENDCIES
const express = require("express");
const cors = require("cors");

// CONTROLLERS
const signalsController = require("./controllers/signals");
const dispatchersController = require("./controllers/dispatcher");
const locationController = require("./controllers/locations");

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// Signals Route Handlers
app
  .route("/signals")
  .get(signalsController.getSignals)
  .post(signalsController.addSignal);

// Dispatchers Route Handlers
app
  .route("/dispatchers")
  .get(dispatchersController.getDispatchers)
  .post(
    dispatchersController.deleteDispatcher,
    dispatchersController.addDispatcher
  );

// Locations Route Handlers
app.route("/locations").get(locationController.getLocations);

// START SERVER
app.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
