const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
    // conn.readMessages([m.key])
    await m.reply('*𝐅𝐔𝐄 𝐔𝐍 𝐆𝐔𝐒𝐓𝐎 𝐄𝐒𝐓𝐀𝐑 𝐀𝐋 𝐀𝐈𝐑𝐄 𝐄𝐒𝐓𝐀 𝐉𝐎𝐑𝐍𝐀𝐃𝐀...*\n\n*𝐍𝐎𝐒 𝐕𝐄𝐌𝐎𝐒 𝐏𝐑𝐎𝐍𝐓𝐎 𝐌𝐈𝐒 𝐐𝐔𝐄𝐑𝐈𝐃𝐎𝐒 𝐎𝐘𝐄𝐍𝐓𝐄𝐒*');
    process.send('reset');
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['cortar', 'finalizar'];
handler.rowner = true;
export default handler;