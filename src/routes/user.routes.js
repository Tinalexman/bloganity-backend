const express = require("express");
const UserController = require("../controllers/user.controller");
const controller = new UserController();
const router = express.Router();

router.post("/login", controller.signIn);
router.post("/register", controller.signUp);

module.exports = router;
