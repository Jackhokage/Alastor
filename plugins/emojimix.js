import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
import fs from "fs"
let handler = async (m, { conn, text, args, usedPrefix, command }) => {
if (!args[0]) throw `𝐓𝐄𝐍𝐄𝐒 𝐐𝐔𝐄 𝐔𝐒𝐀𝐑 𝐃𝐎𝐒 𝐄𝐌𝐎𝐉𝐈𝐒 𝐘 𝐄𝐍 𝐌𝐄𝐃𝐈𝐎 𝐏𝐎𝐍𝐄𝐑 *+*\n𝐄𝐉𝐄𝐌𝐏𝐋𝐎\n*${usedPrefix + command}* 😀+🤠*`
let [emoji1, emoji2] = text.split`+`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let stiker = await sticker(false, res.url, global.packname, global.author)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
}}
handler.help = ['emojimix'].map(v => v + ' emot1|emot2>')
handler.tags = ['fun']
handler.command = /^(emojimix|emogimix|combinaremojis|mixemoji|emojismix|emogismix)$/i
export default handler
const fetchJson = (url, options) => new Promise(async (resolve, reject) => {
fetch(url, options)
.then(response => response.json())
.then(json => {
resolve(json)
})
.catch((err) => {
reject(err)
})})