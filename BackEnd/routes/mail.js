const mailcontroller = require("../mail/sendMail");

const router = require("express").Router();

router.post("/",mailcontroller.SendMail);

module.exports = router;