const recipeController = require("../controllers/RecipeController");

const router = require("express").Router();

router.get("/", recipeController.getAllReceipts);

router.get("/:id", recipeController.getReceiptById);

router.delete("/:id", recipeController.deleteReceipt);

router.post("/", recipeController.addReceipt);

router.put("/:id", recipeController.updateReceipt);

module.exports = router;