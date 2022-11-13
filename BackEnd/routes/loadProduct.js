const loadProductController = require("../controllers/loadProductController");

const router = require("express").Router();

router.get("/:cateid", loadProductController.getProductByCateID);

module.exports = router;