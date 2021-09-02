/*


*/

function successfullMessage(msg) {
    return "✅ *⚡🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰⚡*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *⚡🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰⚡*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *⚡🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰⚡*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
