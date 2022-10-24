const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

dotenv.config();
const Mail = {

    SendMail: async (req, res) => {
        try {
            const {email} = req.body;
            let transporter = nodemailer.createTransport({
                service:"gmail",
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
                html: `<h1>${Stext}</h1>`, // html body
              },(err) => {
                if(err){
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

        const user = await User.findOneAndUpdate({email: email}, {password: hashed});

        if(user){
            res.status(200).json(user);
        }
        else{
            res.status(404).json("có gì đó ko ổn!!!");
        }
    }
};
module.exports = Mail;