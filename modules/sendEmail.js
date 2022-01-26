function sendEmail() {
    const data = require('./data/data.json')
    const nodemailer = require('nodemailer');

    const config = require('../config.json')

    var transporter = nodemailer.createTransport({
        service: config.service,
        auth: {
            user: data.username,
            pass: data.password
        }
    });
    
    var mail = {
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: data.html
    };
    
    transporter.sendMail(mail, function(error, info) {
        if(error){
            console.log(error);
        }else{
            console.log(info);
        }
    });
}

module.exports = {sendEmail}
