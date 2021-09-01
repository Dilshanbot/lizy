const XTroid = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
let FM = Config.WORKTYPE == 'public' ? false : true

XTroid.addCMD({pattern: 'alive', fromMe: FM, deleteCommand: true,}, (async (message, match) => {

var lasi = await axios.get(`https://telegra.ph/file/bb314c6f8f29c8d1d0ee2.jpg`, { responseType: 'arraybuffer' })
await message.client.sendMessage(message.jid, Buffer.from(lasi.data), MessageType.image, {mimetype: Mimetype.png, caption: '            '+Config.ALIVETEXT+'        ⚡🇱🇰🔰✥▬ALPHA▬✥🔰🇱🇰⚡'})
    }));
