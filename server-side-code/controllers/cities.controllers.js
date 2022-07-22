const db = require("../db");

class CityController {
  async getAllCities(req, res) {
    const cities = await db.query('SELECT * FROM cities');
    console.log(cities);
    res.json(cities.rows);
  }
}

module.exports = new CityController();
