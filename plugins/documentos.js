import { toAudio } from '../lib/converter.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    const q = m.quoted || m
    let mime = (q.msg || q).mimetype || ''
    if (!m.quoted) throw `*𐂂 Etiquete el video o audio que desea convertir en documento*`
    if(!text) throw `*𐂂 Ingrese el nombre  que desea colocar al documento.*`
    if (!/audio|video/.test(mime)) throw `𐂂 *_Responda al video o audio que desea convertir a documento con el comando :_*\n\n*${usedPrefix + command}*`
    let media = await q.download?.()
    if (!media) throw '❎ Error al descargar medios'
    m.reply('*𐂂Aɢᴜᴀʀᴅᴇ ᴜɴ ᴍᴏᴍᴇɴᴛᴏ𐂂*')
    if (/video/.test(mime)) {
    return conn.sendMessage(m.chat, { document: media, mimetype: 'video/mp4', fileName: `${text}.mp4`}, {quoted: m})
    } else if (/audio/.test(mime)) {
    return conn.sendMessage(m.chat, { document: media, mimetype: 'audio/mpeg', fileName: `${text}.mp3`}, {quoted: m})}
}
handler.help = ['document *<audio/video>*']
handler.tags = ['herramientas']
handler.command = ['document'] 
handler.register = false

export default handler