const _ = require("lodash");
const Marque = require("../models/marque");

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

exports.allMarques = (req, res) => {
  Marque.find((err, marques) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    res.json({
      marques,
    });
  });
};
