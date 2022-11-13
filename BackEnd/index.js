<<<<<<< Updated upstream
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const roleRoute = require('./routes/role');
const productRoute = require('./routes/product');
const categoryProductRoute = require('./routes/categoryProduct');
const mail = require('./routes/mail');
const receiptRoute = require('./routes/Receipt');
const earnPointsRoute = require('./routes/earnPoints');
const ingredientRoute = require('./routes/ingredient');
const positionRoute = require('./routes/position');
const receiptIngredientRoute = require('./routes/ReceiptIngredient');
const sizeProductRoute = require('./routes/sizeProduct');
const staffRoute = require('./routes/staff');
const supplierRoute = require('./routes/supplier');
const recipeRoute = require('./routes/Recipe');
=======
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const roleRoute = require("./routes/role");
const productRoute = require("./routes/product");
const categoryProductRoute = require("./routes/categoryProduct");
const mail = require("./routes/mail");
const receiptRoute = require("./routes/Receipt");
const sizeProductRoute = require("./routes/sizeProduct");
const disCountRoute = require("./routes/disCount");
const rateRoute = require("./routes/rate");
>>>>>>> Stashed changes

dotenv.config();
const app = express();

<<<<<<< Updated upstream
// mongoose.connect(process.env.MONGOOSE_URL, () => {
//  console.log('DB connected');
// });

mongoose.connect(process.env.MONGOOSE_URL_LOCALHOST, () => {
  console.log('DB connected');
});

=======
mongoose.connect(process.env.MONGOOSE_URL, () => {
  console.log("DB connected");
});

// mongoose.connect(process.env.MONGOOSE_URL_LOCALHOST, () => {
//   console.log("DB connected");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
>>>>>>> Stashed changes
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/role', roleRoute);
app.use('/product', productRoute);
app.use('/category', categoryProductRoute);
app.use('/mail', mail);
app.use('/receipt', receiptRoute);
app.use('/earnpoints', earnPointsRoute);
app.use('/ingredient', ingredientRoute);
app.use('/position', positionRoute);
app.use('/receiptingredient', receiptIngredientRoute);
app.use('/sizeproduct', sizeProductRoute);
app.use('/staff', staffRoute);
app.use('/supplier', supplierRoute);
app.use('/recipe', recipeRoute);

app.listen(8000, () => {
  console.log('Server is running...');
});
