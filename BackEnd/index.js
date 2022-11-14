const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const roleRoute = require('./routes/role');
const productRoute = require('./routes/product');
const categoryProductRoute = require('./routes/categoryProduct');
const mail = require('./routes/mail');
const receiptRoute = require('./routes/Receipt');
const sizeProductRoute = require('./routes/sizeProduct');
const disCountRoute = require('./routes/disCount');
const rateRoute = require('./routes/rate');
const loadProductRoute = require('./routes/loadProduct');



dotenv.config();
const app = express();

// mongoose.connect(process.env.MONGOOSE_URL, () => {
//   console.log('DB connected');
// });

mongoose.connect(process.env.MONGOOSE_URL_LOCALHOST, () => {
  console.log("DB connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/role", roleRoute);
app.use("/product", productRoute);
app.use("/category", categoryProductRoute);
app.use("/mail", mail);
app.use("/receipt", receiptRoute);
app.use("/sizeproduct", sizeProductRoute);
app.use("/discount", disCountRoute);
app.use("/rate", rateRoute);

app.use("/category/one", categoryProductRoute);

app.use("/loadproduct", loadProductRoute);



app.listen(8000, () => {
  console.log("Server is running...");
});
