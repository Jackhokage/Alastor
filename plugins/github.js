import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
let handler = async (m, { args, usedPrefix, command }) => {
if (!args[0]) throw `𝐔𝐒𝐀 𝐄𝐋 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 ${usedPrefix + command} 𝐘 𝐔𝐍 𝐋𝐈𝐍𝐊 𝐃𝐄𝐋 𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎*`
if (!regex.test(args[0])) throw `ESPERA`
try {   
let [_, user, repo] = args[0].match(regex) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
m.reply(`𝐄𝐒𝐏𝐄𝐑𝐀 𝐄𝐍 𝐋𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐎 𝐄𝐒𝐓𝐄 𝐑𝐄𝐏𝐎𝐒𝐈𝐓𝐎𝐑𝐈𝐎, 𝐒𝐈 𝐍𝐎 𝐒𝐄 𝐄𝐍𝐕𝐈𝐀 𝐏𝐔𝐄𝐃𝐄 𝐒𝐄𝐑 𝐏𝐎𝐑𝐐𝐔𝐄 𝐒𝐔𝐏𝐄𝐑𝐀 𝐌𝐈𝐒 𝐋𝐈𝐌𝐈𝐓𝐄𝐒 `)
conn.sendFile(m.chat, url, filename, null, m)
} catch (e) { 
await conn.reply(m.chat, `𝐄𝐑𝐑𝐎𝐑`)
console.log(e)
handler.limit = 0
}}
handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|clonarepo|clonarrepo|repoclonar/i
handler.limit = 
handler.level = 
handler.register = false
export default handler