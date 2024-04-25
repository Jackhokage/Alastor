export default function handler(m) {

let teks = `\n\t\t> 「𐂂\t ${clockString(process.uptime())} \𐂂」<\n`
conn.sendMessage(m.chat, {text: teks, jpegThumbnail:  global.thumb}, { quoted: m} )
}

handler.tags = ['info']
handler.command = handler.help = ['radio2']

function clockString(ms) {
	let h = isNaN(ms) ? '--' : Math.floor(ms % (3600 * 24) / 3600)
	let m = isNaN(ms) ? '--' : Math.floor(ms % 3600 / 60)
	let s = isNaN(ms) ? '--' : Math.floor(ms % 60)
	return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}