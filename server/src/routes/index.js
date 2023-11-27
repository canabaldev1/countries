const { Router } = require("express");

const getCountriesController = require("../controllers/getCountriesController");
const getCountryByIdController = require("../controllers/getCountryByIdController");
const postActivityContoller = require("../controllers/postActivityContoller");

const router = Router();

router.get("/countries", getCountriesController);
router.get("/countries/:id", getCountryByIdController);
router.post("/activity", postActivityContoller);

module.exports = router;
