const express = require("express");
const OverviewController = require("../controllers/overview.controller");
const controller = new OverviewController();

const router = express.Router();
const requireLogin = require("../middlewares/requireLogin");

router.get("/", requireLogin, controller.getAll);

module.exports = router;
