const Product = require('../models/product');
const LoadProductController = {
    getProductByCateID: async (req, res) => {
        try {
            const cateId = req.params.cateid;
            if (cateId) {
                const list = await Product.find({ "categoryproductid": `${cateId}` });
                res.status(200).json(list);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
};

module.exports = LoadProductController;
