const sizeProductController = require("../controllers/SizeProductController");

const router = require("express").Router();

router.get("/", sizeProductController.getAllSizeProducts);

router.get("/:id", sizeProductController.getSizeProductById);

router.delete("/:id", sizeProductController.deleteSizeProduct);

router.post("/", sizeProductController.addSizeProduct);

router.patch("/:id", sizeProductController.updateSizeProduct);

module.exports = router;