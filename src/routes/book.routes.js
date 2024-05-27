const express = require("express");
const BookController = require("../controllers/book.controller");

const requireLogin = require("../middlewares/requireLogin");

const controller = new BookController();
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.get("/genre/:genre", controller.getBooksByGenre);
router.post("/create", requireLogin, controller.create);
router.put("/edit", requireLogin, controller.update);
router.delete("/delete/:id", requireLogin, controller.deleteById);
router.delete("/delete", requireLogin, controller.deleteAll);

module.exports = router;
