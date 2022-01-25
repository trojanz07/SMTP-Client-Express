function saveData(username, password, from, to, subject, html) {
    const fs = require('fs');

    let smtp = { 
        username: username,
        password: password, 
        from: from,
        to: to,
        subject: subject,
        html: html
    };
     
    let data = JSON.stringify(smtp);
    fs.writeFileSync(__dirname + '/data/data.json', data);
}

module.exports = {saveData}