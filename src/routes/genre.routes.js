const express = require("express");
const GenreController = require("../controllers/genre.controller");
const controller = new GenreController();
const router = express.Router();

const requireLogin = require("../middlewares/requireLogin");

router.get("/", controller.getAll);
router.post("/add", requireLogin, controller.create);
router.put("/edit", requireLogin, controller.update);
router.delete("/delete/:id", requireLogin, controller.deleteById);
router.delete("/delete", requireLogin, controller.deleteAll);

module.exports = router;
