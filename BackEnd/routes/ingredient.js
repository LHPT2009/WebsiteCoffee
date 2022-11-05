const ingredientController = require("../controllers/IngredientController");

const router = require("express").Router();

router.get("/", ingredientController.getAllIngredient);

router.get("/:id", ingredientController.getIngredientById);

router.delete("/:id", ingredientController.deleteIngredient);

router.post("/", ingredientController.addIngredient);

router.put("/:id", ingredientController.updateIngredient);

module.exports = router;