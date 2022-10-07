const advertisingContractController = require("../controllers/advertisingContractController");

const router = require("express").Router();

router.get("/", advertisingContractController.getAllAdvertisingContracts);

router.get("/:id", advertisingContractController.getAdvertisingContractById);

router.delete("/:id", advertisingContractController.deleteAdvertisingContract);

router.post("/", advertisingContractController.addAdvertisingContract);

router.put("/:id", advertisingContractController.updateAdvertisingContract);

module.exports = router;