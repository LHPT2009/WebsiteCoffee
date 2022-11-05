const receiptIngRedientController = require("../controllers/ReceiptIngRedientController");

const router = require("express").Router();

router.get("/", receiptIngRedientController.getAllReceiptIngredient);

router.get("/:id", receiptIngRedientController.getReceiptIngredientById);

router.delete("/:id", receiptIngRedientController.deleteReceiptIngredient);

router.post("/", receiptIngRedientController.addReceiptIngredient);

router.put("/:id", receiptIngRedientController.updateReceiptIngredient);

module.exports = router;