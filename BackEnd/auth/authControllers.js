const User = require('../models/User.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

let refreshTokens = [];

const authController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashed,
        role: '6335369ee1caa255ab840cd4'
      });

      await newUser.save();
      res.status(200).json(newUser);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role.rolename
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: '1d' }
    );
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username }).populate('role', ['rolename']).then().catch();
      if (!user) {
        return res.status(404).json('Wrong username!');
      }
      const validPassword = bcrypt.compare(req.body.password, user.password);
      if (!validPassword) {
        return res.status(404).json('Wrong Password!');
      }
      if (user && validPassword) {
        const accessToken = authController.generateAccessToken(user);
        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

   userLogout: async (req, res) => {
  //   res.clearCookie('accessToken');
  //   accessTokens = accessTokens.filter(
  //     (token) => token !== req.cookies.accessToken
  //   );
  //   res.status(200).json('logged out!');
 },
};

module.exports = authController;
