const momoController = require("../controllers/momoController");

const router = require("express").Router();

router.post("/", momoController.linkURL, momoController.paymentMoMo);


module.exports = router;