import fetch from 'node-fetch';
import axios from 'axios';
import {Configuration, OpenAIApi} from 'openai';
const configuration = new Configuration({organization: global.openai_org_id, apiKey: global.openai_key});
const openaiii = new OpenAIApi(configuration);
const handler = async (m, {conn, text, usedPrefix, command}) => {
if (usedPrefix == 'a' || usedPrefix == 'A') return;
if (!text) throw `> 𝐀𝐋𝐀𝐒𝐓𝐎𝐑
𝐈𝐍𝐆𝐑𝐄𝐒𝐀 𝐀𝐋𝐆𝐔𝐍𝐀 𝐏𝐑𝐄𝐆𝐔𝐍𝐓𝐀 𝐏𝐀𝐑𝐀 𝐀𝐋𝐀𝐒𝐓𝐎𝐑 𝐈𝐀\n ${usedPrefix + command} Recomienda un top 10 de películas de acción\n ${usedPrefix + command} Codigo en JS para un juego de cartas`    
try {
conn.sendPresenceUpdate('composing', m.chat);
let sistema1 = `Actuaras como un Bot de WhatsApp el cual fue creado por Astral, tu seras Alastor-bot`;
async function getOpenAIChatCompletion(texto) {
const openaiAPIKey = global.openai_key;
let chgptdb = global.chatgpt.data.users[m.sender];
chgptdb.push({ role: 'user', content: texto });
const url = "https://api.openai.com/v1/chat/completions";
const headers = { "Content-Type": "application/json", "Authorization": `Bearer ${openaiAPIKey}` };
const data = { "model": "gpt-3.5-turbo", "messages": [{ "role": "system", "content": sistema1 }, ...chgptdb, ]};
const response = await fetch(url, {method: "POST", headers: headers, body: JSON.stringify(data)});
const result = await response.json();
const finalResponse = result.choices[0].message.content;
return finalResponse;
};
let respuesta = await getOpenAIChatCompletion(text);
if (respuesta == 'error' || respuesta == '' || !respuesta) return XD; // causar error undefined para usar otra api
m.reply(`> 𝐀𝐋𝐀𝐒𝐓𝐎𝐑
${respuesta}`.trim());
} catch {
try {
const botIA222 = await openaiii.createCompletion({model: 'text-davinci-003', prompt: text, temperature: 0.3, max_tokens: 4097, stop: ['Ai:', 'Human:'], top_p: 1, frequency_penalty: 0.2, presence_penalty: 0});
if (botIA222.data.choices[0].text == 'error' || botIA222.data.choices[0].text == '' || !botIA222.data.choices[0].text) return XD; // causar error undefined para usar otra api
m.reply(botIA222.data.choices[0].text.trim());
} catch {
try {
const syms1 = `Actuaras como un Bot de WhatsApp el cual fue creado por Astral, tu seras Alastor-bot`
const Empireapi1 = await fetch(`https://api.cafirexos.com/api/chatgpt?text=${text}&name=${m.name}&prompt=${syms1}`);
const empireApijson1 = await Empireapi1.json();
if (empireApijson1.resultado == 'error' || empireApijson1.resultado == '' || !empireApijson1.resultado) return XD; // causar error undefined para lanzar msg de error
m.reply(`${empireApijson1.resultado}`.trim());
} catch {
}}}};
handler.command = /^(alastor|chatgpt|Alastor|ai|openai2|chatgpt2|ia2)$/i;
export default handler;
