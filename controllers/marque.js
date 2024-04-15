const _ = require("lodash");
const Marque = require("../mongo/model/MarqueModel");

exports.marqueById = (req, res, next, id) => {
  Marque.findById(id).exec((err, marque) => {
    if (err || !marque) {
      return res.status(400).json({
        error: "Marque not found",
      });
    }
    res.json({
      marque,
    });
  });
};

exports.allMarques = async (req, res) => {
  const result = await Marque.find();

  res.json({
    result,
  });
};
