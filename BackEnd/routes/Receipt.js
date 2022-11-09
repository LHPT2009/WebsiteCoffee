const ReceiptController = require("../controllers/ReceiptController");

const router = require("express").Router();

router.get("/", ReceiptController.getAllReceipts);

router.get("/:id", ReceiptController.getReceiptById);

router.get("/detail/:id", ReceiptController.getReceiptDetailById);

router.delete("/:id", ReceiptController.deleteReceipt);

router.post("/", ReceiptController.addReceipt);

router.put("/:id", ReceiptController.updateReceipt);

module.exports = router;