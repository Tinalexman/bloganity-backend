const express = require("express");
const BlogController = require("../controllers/blog.controller");

const requireLogin = require("../middlewares/requireLogin");

const controller = new BlogController();
const router = express.Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/create", requireLogin, controller.create);
router.put("/edit", requireLogin, controller.update);
router.delete("/delete/:id", requireLogin, controller.deleteById);

module.exports = router;
