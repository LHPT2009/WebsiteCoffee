const earnPointsController = require("../controllers/EarnPointsController");

const router = require("express").Router();

router.get("/", earnPointsController.getAllCategoryProducts);

router.get("/:id", earnPointsController.getCategoryProductById);

router.delete("/:id", earnPointsController.deleteCategoryProduct);

router.post("/", earnPointsController.addCategoryProduct);

router.put("/:id", earnPointsController.updateCategoryProduct);

module.exports = router;