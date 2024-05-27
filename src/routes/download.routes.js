const express = require("express");
const DownloadController = require("../controllers/download.controller");
const controller = new DownloadController();
const router = express.Router();

const requireLogin = require("../middlewares/requireLogin");

router.get("/", controller.getAll);
router.post("/", controller.create);
router.delete("/delete", requireLogin, controller.deleteAll);

module.exports = router;
