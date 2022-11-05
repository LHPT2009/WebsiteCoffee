const recipeController = require("../controllers/RecipeController");

const router = require("express").Router();

router.get("/", recipeController.getAllRecipes);

router.get("/:id", recipeController.getRecipeById);

router.delete("/:id", recipeController.deleteRecipe);

router.post("/", recipeController.addRecipe);

router.put("/:id", recipeController.updateRecipe);

module.exports = router;