import pkg from '@adiwajshing/baileys'
import fs  from 'fs'

const { prepareWAMessageMedia, generateWAMessageFromContent, proto } = pkg

let handler = async (m, { conn }) => {
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./media/thumbnail.jpg') }, { upload: conn.waUploadToServer })
var catalog = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"productMessage": {
"product": {
"productImage": messa.imageMessage,
"productId": "53268449273995",
"title": `๐๐๐ฐ๐๐๐ผ๐ญ | ใ Nai-bot Store ใ`,
"description": `gaktau`,
"currencyCode": "IDR",
"bodyText": `gaktaukalo๐ฟ`,
"footerText": `hehehe๐ฟ`,
"priceAmount1000": "30000000",
"productImageCount": 100,
"firstImageId": 1,
"salePriceAmount1000": "99999999",
"retailerId": `ใ Nai-bot Store ใ`,
"url": "wa.me/6281386945391"
},
"businessOwnerJid": "6281386945391@s.whatsapp.net",
}
}), { userJid: m.chat, quoted: m })
conn.relayMessage(m.chat, catalog.message, { messageId: catalog.key.id })
}
handler.help = ['sewa' , 'premium']
handler.tags = ['main']
handler.command = /^(sewa)$/i

export default handler
