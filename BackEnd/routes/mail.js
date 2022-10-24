const mailcontroller = require("../mail/sendMail");

const router = require("express").Router();

router.post("/",mailcontroller.SendMail);

router.post("/reset",mailcontroller.ResetPassword);

module.exports = router;