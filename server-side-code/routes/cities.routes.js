const Router = require("express");
const router = new Router();
const cityController = require("../controllers/cities.controllers");

router.get("/cities", cityController.getAllCities);

module.exports = router;