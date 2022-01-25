const terminal = require('@skylixgh/nitrojs-terminal');

function listen(app, PORT) {
    terminal.animate("Starting your server");
    app.listen(PORT, () => {
        terminal.stopAnimation(terminal.State.success, 'Listening on port ' + PORT);
    })
}


module.exports = {listen}