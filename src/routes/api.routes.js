const express = require("express");
const router = express.Router();

router.use("/blogs", require("./blog.routes"));
router.use("/users", require("./user.routes"));

module.exports = router;
