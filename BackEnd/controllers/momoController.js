const moMoController = {
    linkURL: (req, res, next) => {
        amount = req.body.amount
        orderInfo = req.body.orderInfo
        var partnerCode = "MOMO";
        var accessKey = "F8BBA842ECF85";
        var secretkey = "K951B6PE1waDMi640xX08PD3vg6EkVlz";
        var requestId = partnerCode + new Date().getTime();
        var orderId = requestId;
        var orderInfo = orderInfo;
        var redirectUrl = "https://momo.vn/tradulieu";
        var ipnUrl = "https://callback.url/notify";
        var amount = amount;
        var requestType = "captureWallet"
        var extraData = "";

        var rawSignature = "accessKey=" + accessKey + "&amount=" + amount + "&extraData=" + extraData + "&ipnUrl=" + ipnUrl + "&orderId=" + orderId + "&orderInfo=" + orderInfo + "&partnerCode=" + partnerCode + "&redirectUrl=" + redirectUrl + "&requestId=" + requestId + "&requestType=" + requestType

        //signature
        const crypto = require('crypto');
        var signature = crypto.createHmac('sha256', secretkey)
            .update(rawSignature)
            .digest('hex');

        //json object send to MoMo endpoint
        const requestBody = JSON.stringify({
            partnerCode: partnerCode,
            accessKey: accessKey,
            requestId: requestId,
            amount: amount,
            orderId: orderId,
            orderInfo: orderInfo,
            redirectUrl: redirectUrl,
            ipnUrl: ipnUrl,
            extraData: extraData,
            requestType: requestType,
            signature: signature,
            lang: 'en'
        });
        //Create the HTTPS objects
        const https = require('https');
        const options = {
            hostname: 'test-payment.momo.vn',
            port: 443,
            path: '/v2/gateway/api/create',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': Buffer.byteLength(requestBody)
            }
        }
        //Send the request and get the response
        const send = https.request(options, res => {
            res.setEncoding('utf8');
            res.on('data', (body) => {
                // console.log(JSON.parse(body).payUrl);
                req.datemomo = body
                next();
            });
        })
        send.write(requestBody);
    },
    paymentMoMo: async (req, res) => {
        try {
            const url = JSON.parse(req.datemomo).payUrl;
            res.status(200).json(url)
        } catch (err) {
            res.status(500).json(err);
        }
    },
};

module.exports = moMoController;
