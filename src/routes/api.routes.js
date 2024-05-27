const express = require("express");
const router = express.Router();

router.use("/books", require("./book.routes"));
router.use("/user", require("./user.routes"));
router.use("/genres", require("./genre.routes"));
router.use("/downloads", require("./download.routes"));
router.use("/overview", require("./overview.routes"));

module.exports = router;
