const router = require("express").Router();

const { getSmartphones } = require("../Controllers/smartphone");

router.get("/", getSmartphones);

module.exports = router;
