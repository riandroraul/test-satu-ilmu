const queryPromise = require("../helper");

const getSmartphones = async (req, res) => {
  try {
    const result = await queryPromise("SELECT * FROM smartphone");
    res.status(200).json({ status: 200, message: "success", result });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getSmartphones };
