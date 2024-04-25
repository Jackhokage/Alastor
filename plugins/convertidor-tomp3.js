import {toAudio} from '../lib/converter.js';
const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  if (!/video|audio/.test(mime)) throw `*𝐑𝐄𝐒𝐏𝐎𝐍𝐃𝐀 𝐀𝐋 𝐕𝐈𝐃𝐄𝐎 𝐎 𝐀𝐔𝐃𝐈𝐎 𝐐𝐔𝐄 𝐃𝐄𝐒𝐄𝐀 𝐕𝐎𝐋𝐕𝐄𝐑 𝐀 𝐌𝐏𝟑*`;
  const media = await q.download();
  if (!media) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎, 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐂𝐎𝐍 𝐄𝐋 𝐕𝐈𝐃𝐄𝐎*';
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*𝐋𝐎 𝐋𝐀𝐌𝐄𝐍𝐓𝐎, 𝐇𝐔𝐁𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 𝐄𝐍 𝐋𝐀 𝐒𝐄𝐍̃𝐀𝐋 𝐃𝐄 𝐑𝐀𝐃𝐈𝐎*';
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg'}, {quoted: m});
};
handler.alias = ['tomp3', 'toaudio'];
handler.command = /^to(mp3|audio)$/i;
export default handler;
