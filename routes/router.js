const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const smtp = require('../modules/saveData');
const {sendEmail} = require('../modules/sendEmail');

const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.sendFile(__dirname + '/src/index.html');
})

router.post('/send', urlencodedParser, (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let from = req.body.from;
    let to = req.body.to;
    let subject = req.body.subject
    let html = req.body.message

    smtp.saveData(username, password, from, to, subject, html);

    sendEmail();


    res.send('Sent!')
});

module.exports = router;