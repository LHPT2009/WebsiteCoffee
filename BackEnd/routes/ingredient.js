const ingredientController = require("../controllers/IngredientController");

const router = require("express").Router();

router.get("/", ingredientController.getAllCategoryProducts);

router.get("/:id", ingredientController.getCategoryProductById);

router.delete("/:id", ingredientController.deleteCategoryProduct);

router.post("/", ingredientController.addCategoryProduct);

router.put("/:id", ingredientController.updateCategoryProduct);

module.exports = router;