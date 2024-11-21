const express = require("express");
const router = express.Router();
const { testAPI, testDB } = require("../controller/testController");

router.get("/test/api", testAPI);
router.get("/test/db", testDB);

module.exports = router;
