function listen(app, PORT) {
    console.log("Starting your server");
    app.listen(PORT, () => {
        console.log('Listening on port ' + PORT);
    })
}


module.exports = {listen}
