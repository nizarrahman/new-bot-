import fetch from 'node-fetch'
import fs from 'fs'

let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = hwaifu.getRandom()
let fliveLoc22 = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
global.rep = {
            key: {
            participant : '0@s.whatsapp.net'},
            message: { "liveLocationMessage": { "title": gcname,"h": bottime, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}}
           }
conn.sendButtonVid(m.chat, giflogo, `šššššš`, `ā® Pulsa = [${ppulsa}]\n\nšš¼š­š : šš¢š¤š šš®ššš” šš¼š§šš¬š¢ šš¢š„šš”š¤šš§ šš¢š«šŗ\nšš®š¤š­š¢ šš šš°š§šš«!!\nšš­šš® šš„š¢š¤ šš¢ ššš°šš”
`, 'Owner', '.owner', fkontak,)
}
handler.tags = ['donasi', 'donate']
handler.help = ['info']
handler.command = /^(donate|donasi)$/i

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
