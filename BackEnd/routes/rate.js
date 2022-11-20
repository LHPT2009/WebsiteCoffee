const rateController = require("../controllers/rateController");

const router = require("express").Router();

router.get("/", rateController.getAllRates);

router.get("/:id", rateController.getRateByProductId);

router.post("/receiptid", rateController.getRateByReceiptid);

router.get("/one/:id", rateController.getRateById);

router.delete("/:id", rateController.deleteRate);

router.post("/", rateController.addRate);

router.put("/:id", rateController.updateRate);

router.put("/receiptrate/:id", rateController.updateReceiptRate);


module.exports = router;