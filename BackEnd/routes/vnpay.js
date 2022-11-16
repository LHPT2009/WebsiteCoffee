const vnpayController = require("../controllers/vnpayController");

const router = require("express").Router();

router.post("/createpaymenturl", vnpayController.createPaymentUrl);

router.get("/vnpayipn", vnpayController.vnpayIpn);

router.get("/vnpayreturn", vnpayController.vnpayReturn);

module.exports = router;