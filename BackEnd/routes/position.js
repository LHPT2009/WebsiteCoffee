const positionController = require("../controllers/PositionController");

const router = require("express").Router();

router.get("/", positionController.getAllCategoryProducts);

router.get("/:id", positionController.getCategoryProductById);

router.delete("/:id", positionController.deleteCategoryProduct);

router.post("/", positionController.addCategoryProduct);

router.put("/:id", positionController.updateCategoryProduct);

module.exports = router;