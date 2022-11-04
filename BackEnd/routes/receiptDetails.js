const receiptDetailsController = require("../controllers/ReceiptDetailsController");

const router = require("express").Router();

router.get("/", receiptDetailsController.getAllReceipts);

router.get("/:id", receiptDetailsController.getReceiptById);

router.delete("/:id", receiptDetailsController.deleteReceipt);

router.post("/", receiptDetailsController.addReceipt);

router.put("/:id", receiptDetailsController.updateReceipt);

module.exports = router;