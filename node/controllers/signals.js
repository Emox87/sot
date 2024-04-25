const addSignal = async (req, res) => {
  res
    .status(201)
    .json({ status: "successs created", message: "signal was added" });
};

const getSignals = async (req, res) => {
  res.json({ message: "FETCHING SIGNALS FROM DATABASE" });
};

const Signals = {
  addSignal,
  getSignals,
};

module.exports = Signals;
