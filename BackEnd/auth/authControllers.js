const User = require("../models/User");
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
        html: `<body
          style="
            margin: 0px;
            background-color: #f5f5f5;
            font-size: 16px;
            border: 1px solid rgba(115, 130, 126, 0.6);
            max-width: 512px;
          "
        >
          <div style="margin: 40px; color: #1f1f1f">
            <div
              style="
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-bottom: 24px;
              "
            >
              <img src="https://i.imgur.com/MiYjZYF.png" alt="logo-bug-on" />
            </div>
            <div style="width: fit-content">
              <h2 style="line-height: 135%">Chào mừng đến với Coffee Bug Ổn</h2>
              <p style="letter-spacing: 0.04em">Xác thực tài khoản tại đây</p>
              <button
          style="
            text-align: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 16px;
            margin: 48px 0px;
            border-radius: 16px;
            color: #07221b;
            background-color: #dee4e2;
          "
        >
          <a
            style="text-decoration: none; font-weight: 600; color: inherit"
            href="http://localhost:3000/confirmmail?confirm=${send}"
            >Xác thực</a
          >
        </button>
              <!-- <p style="letter-spacing: 0.04em">
                Email này được gửi vì tài khoản của bạn chọn quên mật khẩu. Bạn có 60s
                để thay đổi nhập mã.
              </p> -->
              <p>
                Nếu bạn không phải người thực hiện việc này thì hãy liên hệ cho chúng
                tôi qua bugOnDev@gmail.com
              </p>
              <div
                style="
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  padding: 16px 24px;
                  margin: 56px 0px;
                  border-left: 2px solid #3d685e;
                "
              >
                <p style="letter-spacing: 0.04em">
                  Chân thành cảm ơn,<br />
                  Bug Ổn Team
                </p>
              </div>
              <div
                style="
                  height: 0px;
                  border: 1px solid rgba(115, 130, 126, 0.6);
                  margin: 16px 0px;
                "
              ></div>
              <div class="footer">
                <ul
                  style="
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding-top: px;
                    gap: 24px;
                    list-style: none;
                  "
                >
                  <li>
                    <a href="#" target="_blank">
                      <img src="https://i.imgur.com/nwpLYiW.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="https://i.imgur.com/pmgrgRf.png" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank">
                      <img src="https://i.imgur.com/SScCr1k.png" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </body>`, // html body
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
        name: user.lastname + " " + user.firstname,
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
      const user = await User.findOne({ email: req.body.email }).populate(
        "role"
      );
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
        const user = await User.findOne({ email: req.body.email }).populate(
          "role"
        );
        const accessToken = authController.generateAccessToken(user);
        res.status(200).json(accessToken);
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },
  confirmEmail: async (req, res) => {
    try {
      const user = await User.findByIdAndUpdate(
        req.params.id,
        { confirmemail: true },
        {
          new: true,
        }
      );
      if (!user) {
        return res.status(404).json("Wrong updateUser!");
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = authController;
