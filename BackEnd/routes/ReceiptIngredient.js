const receiptIngRedientController = require("../controllers/ReceiptIngRedientController");

const router = require("express").Router();

router.get("/", receiptIngRedientController.getAllReceipts);

router.get("/:id", receiptIngRedientController.getReceiptById);

router.delete("/:id", receiptIngRedientController.deleteReceipt);

router.post("/", receiptIngRedientController.addReceipt);

router.put("/:id", receiptIngRedientController.updateReceipt);

module.exports = router;