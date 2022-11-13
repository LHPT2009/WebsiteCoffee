const rateController = require("../controllers/rateController");

const router = require("express").Router();

router.get("/", rateController.getAllRates);

router.get("/:id", rateController.getRateByProductId);

router.delete("/:id", rateController.deleteRate);

router.post("/", rateController.addRate);

router.put("/:id", rateController.updateRate);

module.exports = router;