const advertisementController = require("../controllers/advertisementController");

const router = require("express").Router();

router.get("/", advertisementController.getAllAdvertisement);

router.get("/:id", advertisementController.getAdvertisementById);

router.delete("/:id", advertisementController.deleteAdvertisement);

router.post("/", advertisementController.addAdvertisement);

router.put("/:id", advertisementController.updateAdvertisement);

module.exports = router;