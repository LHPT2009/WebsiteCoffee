const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    categoryproductid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CategoryProduct",
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
<<<<<<< Updated upstream
        type: String
=======
      data: Buffer,
      contentType: String,
>>>>>>> Stashed changes
    },
    describe: {
      type: String,
    },
<<<<<<< Updated upstream
}, { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
=======
    status: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
>>>>>>> Stashed changes
