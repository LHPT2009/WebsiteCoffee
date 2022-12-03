const nodemailer = require("nodemailer");
const Receipt = require('../models/Receipt');
const ReceiptDetail = require('../models/ReceiptDetails');
const Rate = require('../models/rate');
const Notification = require('../models/Notification');
const User = require("../models/User");


const ReceiptController = {
    getAllReceipts: async (req, res) => {
        try {
            const receipt = await Receipt.find().populate(`userid`, [`email`]);
            res.status(200).json(receipt);
        } catch (err) {
            res.status(500).json(receipt);
        }
    },

    deleteReceipt: async (req, res) => {
        try {
            const receipt = await Receipt.findByIdAndDelete(req.params.id);
            const receiptdetail = await ReceiptDetail.deleteMany({ receiptid: req.params.id });
            res.status(200).json('Delete successfully');
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getReceiptById: async (req, res) => {
        try {
            const receipt = await Receipt.findById(req.params.id);
            res.status(200).json(receipt);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getReceiptByUserId: async (req, res) => {
        try {
            const receipt = await Receipt.find({ userid: req.body.userid });
            res.status(200).json(receipt);
        } catch (error) {
            res.status(500).json(error);
        }
    },


    getReceiptDetailById: async (req, res) => {
        try {
            const receiptDetail = await ReceiptDetail.find({ receiptid: req.params.id }).populate('productid', ['name']);
            // const receiptDetail = await ReceiptDetail.find().populate('productid');
            res.status(200).json(receiptDetail);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    addReceipt: async (req, res) => {
        try {
            const newReceipt = new Receipt({
                userid: req.body.userid,
                price: req.body.price,
                discountid: req.body.discountid,
                discountprice: req.body.discountprice,
                statuspayment: req.body.statuspayment,
                statusdelivery: req.body.statusdelivery,
                numberphone: req.body.numberphone,
                address: req.body.address,
            });
            await newReceipt.save();

            (req.body.products).forEach(ele => {
                const newReceiptDetail = new ReceiptDetail({
                    productid: ele.id,
                    receiptid: newReceipt._id,
                    amount: ele.amount
                });
                newReceiptDetail.save();
            });
            var productid = "";
            (req.body.products).forEach(ele => {
                if (productid != ele.id) {
                    const newRate = new Rate({
                        userid: req.body.userid,
                        productid: ele.id,
                        receiptid: newReceipt._id,
                        point: 0,
                        content: "",
                        status: false,
                        statusrate: false,
                    });
                    newRate.save();
                    productid = ele.id;
                }
            });

            const newNotification = new Notification({
                receiptid: newReceipt._id,
                userid: req.body.userid,
                status: false
            });
            await newNotification.save();
            res.status(200).json('Add successfully');

            //         const emailuser = await Receipt.find().populate(`userid`, [`email`]);

            //         const { email } = emailuser.email;
            //         const user = await User.findOne({ email: email });
            //         if (user) {
            //             let transporter = nodemailer.createTransport({
            //                 service: "gmail",
            //                 auth: {
            //                     user: process.env.USERNAME_MAIL, // generated ethereal user
            //                     pass: process.env.PASSWORD_MAIL, // generated ethereal password
            //                 },
            //             });
            //             // send mail with defined transport object
            //             let info = await transporter.sendMail(
            //                 {
            //                     from: process.env.USERNAME_MAIL, // sender address
            //                     to: `${email}`, // list of receivers
            //                     subject: "Xác nhận đơn hàng", // Subject line
            //                     text: "Xác nhận đơn hàng!", // plain text body
            //                     html: `
            //                     <body style="margin: 0px; background-color: #F5F5F5; font-size: 16px; border: 1px solid rgba(115, 130, 126, 0.6);">
            //         <div style="margin: 40px; color: #1F1F1F;max-width: 512px;">
            //             <div style="display: flex; flex-direction: row; align-items: center; margin-bottom: 24px;">
            //                 <img src="https://i.imgur.com/MiYjZYF.png" alt="logo-bug-on">
            //             </div>
            //           <div style="width: fit-content;">
            //               <h2 style="line-height: 135%;">Thân gửi Khách hàng,</h2>
            //               <p style="letter-spacing: 0.04em">Đây là mã thay đổi mật khẩu của tài khoản </p>
            //               <div style="display: flex;
            //               flex-direction: row;
            //               justify-content: center;
            //               align-items: center;
            //               padding: 16px;
            //               margin: 48px 0px;
            //               border-radius: 16px;
            //               color: #07221B;
            //               background-color: #dee4e2;">
            //                   <h1>${Stext}</h1>
            //               </div>
            //               <p style="letter-spacing: 0.04em">Email này được gửi vì tài khoản của bạn chọn quên mật khẩu. Bạn có 60s để thay đổi nhập mã.</p>
            //               <p>Nếu bạn không phải người thực hiện việc này thì hãy liên hệ cho chúng tôi qua bugOnDev@gmail.com</p>
            //               <div style="box-sizing: border-box;
            //               display: flex;
            //               flex-direction: row;
            //               align-items: flex-start;
            //               padding: 16px 24px;
            //               margin: 56px 0px;
            //               border-left: 2px solid #3D685E;">
            //                   <p style="letter-spacing: 0.04em">Chân thành cảm ơn,<br>
            //                       Bug Ổn Team</p>
            //               </div>
            //               <div style="height: 0px;
            //               border: 1px solid rgba(115, 130, 126, 0.6);
            //               margin: 16px 0px;">
            //               </div>
            //               <div class="footer">
            //                   <ul style="display: flex;
            //                   flex-direction: row;
            //                   justify-content: center;
            //                   align-items: center;
            //                   padding-top: px;
            //                   gap: 24px;
            //                   list-style: none;">
            //                       <li>
            //                           <a href="#" target="_blank">
            //                               <img src="https://i.imgur.com/nwpLYiW.png">
            //                           </a>
            //                       </li>
            //                       <li>
            //                           <a href="#" target="_blank">
            //                               <img src="https://i.imgur.com/pmgrgRf.png">
            //                           </a>
            //                       </li>
            //                       <li>
            //                           <a href="#" target="_blank">
            //                               <img src="https://i.imgur.com/SScCr1k.png">
            //                           </a>
            //                       </li>
            //                   </ul>
            //               </div>
            //           </div>
            //       </div>
            //   </body>`, // html body
            //                 },
            //                 (err) => {
            //                     if (err) {
            //                         return res.json({
            //                             message: "Lỗi",
            //                             err,
            //                         });
            //                     }
            //                     const tokenreset = jwt.sign(
            //                         {
            //                             email: email,
            //                             passcode: Stext,
            //                         },
            //                         process.env.JWT_ACCESS_KEY,
            //                         { expiresIn: "60s" }
            //                     );
            //                     return res.status(200).json(tokenreset);
            //                 }
            //             );
            //         } else {
            //             res.status(500).json("error email");
            //         }

        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateReceipt: async (req, res) => {
        try {
            const updateReceipt = req.body;
            const receipt = await Receipt.findByIdAndUpdate(req.params.id, updateReceipt, {
                new: true,
            });

            if (!receipt) {
                return res.status(404).json('Wrong updateReceipt!');
            }
            res.status(200).json(receipt);
        } catch (error) {
            console.log(error);
            res.status(500).json('Error!!!');
        }
    },
};

module.exports = ReceiptController;