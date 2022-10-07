const productController = require("../controllers/productController");

const router = require("express").Router();

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.delete("/:id", productController.deleteProduct);

router.post("/", productController.addProduct);

router.put("/:id", productController.updateProduct);

module.exports = router;