const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const roleRoute = require('./routes/role');

dotenv.config();
const app = express();

//mongoose.connect(process.env.MONGOOSE_URL, () => {
//  console.log('DB connected');
//});

mongoose.connect(process.env.MONGOOSE_URL_LOCALHOST, () => {
  console.log('DB connected');
});

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/role', roleRoute);

app.listen(8000, () => {
  console.log('Server is running...');
});