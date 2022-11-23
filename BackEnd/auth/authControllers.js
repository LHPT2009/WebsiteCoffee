const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const authController = {
  registerUser: async (req, res) => {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);

      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        confirmemail: false,
        password: hashed,
        role: req.body.role,
        numberphone: "",
        address: "",
      });
      res.status(200).json(newUser);
      await newUser.save();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USERNAME_MAIL, // generated ethereal user
          pass: process.env.PASSWORD_MAIL, // generated ethereal password
        },
      });
      let send = jwt.sign(
        {
          id: newUser._id,
        },
        process.env.JWT_ACCESS_KEY
      );
      let info = await transporter.sendMail({
        from: process.env.USERNAME_MAIL, // sender address
        to: req.body.email, // list of receivers
        subject: "Confirm Email", // Subject line
        text: "Confirm Email!", // plain text body
        html:
          `<a href="http://localhost:3000/confirmmail?confirm=${send}">Xac nhan mail</a>`, // html body
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },

  generateAccessToken: (user) => {
    return jwt.sign(
      {
        id: user.id,
        role: user.role.rolename,
        name: user.lastname + " " + user.firstname
      },
      process.env.JWT_ACCESS_KEY,
      { expiresIn: "15s" }
    );
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ username: req.body.username }).populate(
        "role",
        ["rolename"]
      );
      if (!user) {
        return res.status(404).json("Wrong username!");
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json("Wrong Password!");
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

  loginGoogle: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email }).populate("role");
      if (user) {
        const accessToken = authController.generateAccessToken(user);
        res.status(200).json(accessToken);
      } else {
        const newUser = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: "Thông tin bảo mật từ Google",
          email: req.body.email,
          confirmemail: true,
          password: "Thông tin bảo mật từ Google",
          role: "6335369ee1caa255ab840cd4",
          numberphone: "",
          address: "",
        });
        await newUser.save();
        const user = await User.findOne({ email: req.body.email }).populate("role");
        const accessToken = authController.generateAccessToken(user);
        res.status(200).json(accessToken);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  confirmEmail: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, { confirmemail: true }, {
        new: true,
      });
      if (!user) {
        return res.status(404).json('Wrong updateUser!');
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authController;
