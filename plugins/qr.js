import {toDataURL} from 'qrcode';
const handler = async (m, {text, conn}) => {
  if (!text) throw `> *𝐈𝐍𝐆𝐑𝐄𝐒𝐄 𝐄𝐋 𝐓𝐄𝐗𝐓𝐎 𝐐𝐔𝐄 𝐐𝐔𝐈𝐄𝐑𝐄 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐑 𝐀 𝐐𝐑*`;
  conn.sendFile(m.chat, await toDataURL(text.slice(0, 2048), {scale: 8}), 'qrcode.png', '> 𝐀𝐐𝐔𝐈 𝐓𝐈𝐄𝐍𝐄 𝐄𝐋 𝐐𝐑 𝐌𝐈 𝐄𝐒𝐓𝐈𝐌𝐀𝐃𝐎', m);
};
handler.help = ['', 'code'].map((v) => 'qr' + v + ' <teks>');
handler.tags = ['tools'];
handler.command = /^qr(code)?$/i;
export default handler;