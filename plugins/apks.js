const XTroid = require('../events');
const axios = require('axios');
const {MessageType, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const {spawnSync} = require('child_process');
const Config = require('../config');
const fs = require('fs');


if (Config.WORKTYPE == 'private') {

   XTroid.addCMD({pattern: 'apkmod', fromMe: true}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *Mod App World* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n\n ⚡🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰⚡ ');
      await message.sendMessage('\n*t.me/danuma*\n');
   }));

}

else if (Config.WORKTYPE == 'public') {

   XTroid.addCMD({pattern: 'apkmod', fromMe: false}, (async (message, match) => {
      await message.sendMessage('┏━━━━━━━━━━━━━━━━━━━\n┃〘 ☣️ *Mod App World* ☣️ 〙\n┗━━━━━━━━━━━━━━━━━━━\n\n ⚡🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰⚡ ');
      await message.sendMessage('\n*t.me/danuma*\n');
   }));
   
}
