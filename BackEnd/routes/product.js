const productController = require("../controllers/productController");
const multer = require('multer');
const router = require("express").Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

router.get("/", productController.getAllProducts);

router.get("/:id", productController.getProductById);

router.delete("/:id", productController.deleteProduct);

router.post("/", upload.single("image"), productController.addProduct);

router.put("/:id", upload.single("image"), productController.updateProduct);


module.exports = router;