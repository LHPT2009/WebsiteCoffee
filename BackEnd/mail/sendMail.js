const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

dotenv.config();
const Mail = {

  SendMail: async (req, res) => {
    try {
      const { email } = req.body;
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USERNAME_MAIL, // generated ethereal user
          pass: process.env.PASSWORD_MAIL, // generated ethereal password
        },
      });

      // StringRandom
      var Stext = "";
      var length = 5;
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < length; i++)
        Stext += possible.charAt(Math.floor(Math.random() * possible.length));

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: process.env.USERNAME_MAIL, // sender address
        to: `${email}`, // list of receivers
        subject: "Reset Password!", // Subject line
        text: "Reset Password!", // plain text body
        html: `<body style="margin: 0px; background-color: #F5F5F5; font-size: 16px; border: 1px solid rgba(115, 130, 126, 0.6);">
        <div style="margin: 40px; color: #1F1F1F;">
            <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 24px;">
                <img src="img/Logo.png" alt="">
            </div>
            <div style="width: fit-content;">
                <h2 style="line-height: 135%;">Thân gửi Khách hàng,</h2>
                <p style="letter-spacing: 0.04em">Đây là mã thay đổi mật khẩu của tài khoản </p>
                <div style="display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                padding: 16px;
                margin: 48px 0px;
                border-radius: 16px;
                color: #07221B;
                background-color: #dee4e2;">
                    <h1>${Stext}</h1>
                </div>
                <p style="letter-spacing: 0.04em">Email này được gửi vì tài khoản của bạn chọn quên mật khẩu. Bạn có 60s để thay đổi nhập mã.</p>
                <p>Nếu bạn không phải người thực hiện việc này thì hãy liên hệ cho chúng tôi qua bugOnDev@gmail.com</p>
                <div style="box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                padding: 16px 24px;
                margin: 56px 0px;
                border-left: 2px solid #3D685E;">
                    <p style="letter-spacing: 0.04em">Trân thành cảm ơn,<br>
                        Bug Ổn Team</p>
                </div>
                <div style="height: 0px;
                border: 1px solid rgba(115, 130, 126, 0.6);
                margin: 16px 0px;">
                </div>
                <div class="footer">
                    <ul style="display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    padding-top: px;
                    gap: 24px;
                    list-style: none;">
                        <li>
                            <a href="#" target="_blank">
                                <img src="/img/Facebook.png">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="/img/Instagram.png">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank">
                                <img src="/img/Youtube.png">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </body>`, // html body
      }, (err) => {
        if (err) {
          return res.json({
            message: "Lỗi",
            err,
          });
        }
        const tokenreset = jwt.sign(
          {
            email: email,
            passcode: Stext
          },
          process.env.JWT_ACCESS_KEY,
          { expiresIn: '60s' }
        )
        return res.status(200).json(tokenreset);
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  },
  ResetPassword: async (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(pass, salt);

    const user = await User.findOneAndUpdate({ email: email }, { password: hashed });

    if (user) {
      res.status(200).json(user);
    }
    else {
      res.status(404).json("có gì đó ko ổn!!!");
    }
  }
};
module.exports = Mail;