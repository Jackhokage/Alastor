const handler = async (m, {conn, text}) => {
  if (!text) throw '𝐃𝐈𝐌𝐄 𝐄𝐋 𝐓𝐄𝐗𝐓𝐎 𝐏𝐀𝐑𝐀 𝐓𝐔 𝐂𝐎𝐌𝐄𝐍𝐓𝐀𝐑𝐈𝐎';
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/youtube-comment', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch((_) => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender),
  }), 'error.png', '*¡¡𝐆𝐑𝐀𝐂𝐈𝐀𝐒 𝐏𝐎𝐑 𝐒𝐔 𝐂𝐎𝐌𝐄𝐍𝐓𝐀𝐑𝐈𝐎!!*', m);
};
handler.help = ['ytcomment <comment>'];
handler.tags = ['maker'];
handler.command = /^(ytcom)$/i;
export default handler;