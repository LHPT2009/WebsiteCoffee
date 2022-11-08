const mongoose = require("mongoose");
const mongooseAlgolia = require("mongoose-algolia");

const productSchema = new mongoose.Schema({
    categoryproductid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CategoryProduct"
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    describe: {
        type: String
    },
}, { timestamps: true }
);

productSchema.plugin(mongooseAlgolia, {
    appId: process.env.APP_ID,
    apiKey: process.env.ADMIN_API_KEY,
    indexName: "product_search",
    selector: "",
    filter: function (doc){
        return !doc.softdelete;
    },
});

let Product = mongoose.model("Products", productSchema);

Product.SyncToAlgolia();
Product.SetAlgoliaSettings({
    searchableAttributes: ["name", "price", "describe"],
})

module.exports = mongoose.model("Product", productSchema);