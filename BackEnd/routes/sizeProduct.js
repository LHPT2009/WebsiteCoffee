const sizeProductController = require("../controllers/SizeProductController");

const router = require("express").Router();

router.get("/", sizeProductController.getAllReceipts);

router.get("/:id", sizeProductController.getReceiptById);

router.delete("/:id", sizeProductController.deleteReceipt);

router.post("/", sizeProductController.addReceipt);

router.put("/:id", sizeProductController.updateReceipt);

module.exports = router;