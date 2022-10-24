const nodemailer = require("nodemailer");
const dotenv = require('dotenv');

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
            
              // send mail with defined transport object
              let info = await transporter.sendMail({
                from: process.env.USERNAME_MAIL, // sender address
                to: `${email}`, // list of receivers
                subject: "Hello ✔", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Chào bạn mình đang thử Mail?</b>", // html body
              },(err) => {
                if(err){
                    return res.json({
                        message: "Lỗi",
                        err,
                    });
                }
                return res.json({
                    message: `Đã gửi mail thành công cho tài khoản ${email}`
                });
              });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
  
};
module.exports = Mail;;