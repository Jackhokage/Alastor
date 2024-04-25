const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  let name = await conn.getName(m.sender);
  if (name == 'undefined') name = 'Indefinido';
  const b = text.split('|');
  if (!b[1]) throw `*𝐏𝐀𝐑𝐀 𝐐𝐔𝐄 𝐇𝐀𝐆𝐀 𝐋𝐀 𝐄𝐍𝐂𝐔𝐄𝐒𝐓𝐀 𝐒𝐄 𝐔𝐒𝐀 𝐀𝐒𝐈 ${usedPrefix + command} 𝐓𝐄 𝐆𝐔𝐒𝐓𝐀 𝐇𝐀𝐙𝐁𝐈𝐍 𝐇𝐎𝐓𝐄𝐋?|𝐒𝐈|𝐍𝐎*`;
  if (b[12]) throw `*𝐏𝐀𝐑𝐀 𝐐𝐔𝐄 𝐇𝐀𝐆𝐀 𝐋𝐀 𝐄𝐍𝐂𝐔𝐄𝐒𝐓𝐀 𝐒𝐄 𝐔𝐒𝐀 𝐀𝐒𝐈 ${usedPrefix + command} 𝐓𝐄 𝐆𝐔𝐒𝐓𝐀 𝐇𝐀𝐙𝐁𝐈𝐍 𝐇𝐎𝐓𝐄𝐋?|𝐒𝐈|𝐍𝐎*`;
  const caption = `*ᴇɴᴄᴜᴇsᴛᴀ ʀᴇᴀʟɪᴢᴀᴅᴀ ᴘᴏʀ:*\n${name}\n*ᴘʀᴇɢᴜɴᴛᴀ:*\n${text.split('|')[0]}`.trim();
  const options = text.split("|").slice(1).map(option => ({ optionName: option.trim() }));  
  const sendPollMessage = {
    messageContextInfo: {
        messageSecret: "bT3tfZngfSMWK2zOEL8pSclPG+xldidYDX+ybB8vdEw="
    },
    pollCreationMessage: {
        name: caption,
        options: options,
        selectableOptionsCount: 1,
    }
  };
conn.relayMessage(m.chat, sendPollMessage, {quoted: m});
};
handler.help = ['encuesta question|option|option'];
handler.tags = ['group'];
handler.command = ['poll', 'encuesta'];
export default handler;