const categoryProductController = require("../controllers/categoryProductController");

const router = require("express").Router();

router.get("/", categoryProductController.getAllCategoryProducts);

router.get("/:id", categoryProductController.getCategoryProductById);

router.delete("/:id", categoryProductController.deleteCategoryProduct);

router.post("/", categoryProductController.addCategoryProduct);

router.put("/:id", categoryProductController.updateCategoryProduct);

module.exports = router;