const { Router } = require("express");

const getCountriesController = require("../controllers/getCountriesController");
const getCountryByIdController = require("../controllers/getCountryByIdController");
const postActivityContoller = require("../controllers/postActivityContoller");
const getActivitiesController = require("../controllers/getActivitiesController");

const router = Router();

router.get("/countries", getCountriesController);
router.get("/countries/:id", getCountryByIdController);
router.post("/activity", postActivityContoller);
router.get("/activity", getActivitiesController);

module.exports = router;
