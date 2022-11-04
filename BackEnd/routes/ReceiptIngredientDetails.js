const receiptIngredientDetailsController = require("../controllers/ReceiptIngredientDetailsController");

const router = require("express").Router();

router.get("/", receiptIngredientDetailsController.getAllReceipts);

router.get("/:id", receiptIngredientDetailsController.getReceiptById);

router.delete("/:id", receiptIngredientDetailsController.deleteReceipt);

router.post("/", receiptIngredientDetailsController.addReceipt);

router.put("/:id", receiptIngredientDetailsController.updateReceipt);

module.exports = router;