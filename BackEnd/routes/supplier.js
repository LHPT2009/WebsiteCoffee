const supplierController = require("../controllers/SupplierController");

const router = require("express").Router();

router.get("/", supplierController.getAllReceipts);

router.get("/:id", supplierController.getReceiptById);

router.delete("/:id", supplierController.deleteReceipt);

router.post("/", supplierController.addReceipt);

router.put("/:id", supplierController.updateReceipt);

module.exports = router;