import { webp2png } from '../lib/webp2mp6.js'
let handler = async (m, { conn, usedPrefix, command }) => {
const notStickerMessage = `𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐄 𝐀 𝐔𝐍 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐔𝐒𝐀𝐍𝐃𝐎  *${usedPrefix + command}*`
if (!m.quoted) throw notStickerMessage
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw notStickerMessage
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'falla.png', null, m)
}
handler.help = ['toimg (reply)']
handler.tags = ['sticker']
handler.command = ['testimg', 'img', 'jpg']
export default handler
