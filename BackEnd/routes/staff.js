const staffController = require("../controllers/StaffController");

const router = require("express").Router();

router.get("/", staffController.getAllReceipts);

router.get("/:id", staffController.getReceiptById);

router.delete("/:id", staffController.deleteReceipt);

router.post("/", staffController.addReceipt);

router.put("/:id", staffController.updateReceipt);

module.exports = router;