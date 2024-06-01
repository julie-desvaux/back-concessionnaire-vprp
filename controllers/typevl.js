const TypeVL = require("../mongo/model/TypeVL");

const getAllTypes = async (req, res) => {
  const marques = await TypeVL.find();
  if (marques) {
    res.json(marques);
  } else {
    res.json({ error: "notFound" });
  }
};

const addType = async (req, res) => {
  try {
    const type = await TypeVL.create(req.body);
    res.json({
      success: true,
      data: type,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      message: error,
    });
  }
};

module.exports = {
  getAllTypes,
  addType,
};
