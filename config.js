import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""

global.owner = [
  ['5493804165438', '👑   Creador 👑', true],
  ['', '  Collaborator 1 💫', true],
  ['', '  - Collaborator 2 ', true],
  ['', '  - Collaborator 3 ', true],
  ['', ' - Collaborator 4 ', true],
  ['', '  - Collaborator 5 ', true],
  ['', '  - Collaborator 6 ', true],
  ['', '  - Collaborator 7 ', false],
  ['', '  - Collaborator 8 ', true],
  ['','  - Tester ', true],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''],
  [''], 
  [''],  
  [''],
  [''],
  ['']
];

global.suittag = [''];
global.prems = [''];

global.packname = '𝐀𝐋𝐀𝐒𝐓𝐎𝐑-𝐁𝐎𝐓';
global.author = 'By ✘⚡︎『ᴀsᴛʀᴀʟ』⚡︎✘';
global.wm = 'Alastor';
global.titulowm = 'Alastor';
global.titulowm2 = `Alastor`
global.igfg = 'Alastor';
global.wait = '*Cargando...*';

global.imagen1 = fs.readFileSync('./menu2.jpg');
global.imagen2 = fs.readFileSync('./src/owner.jpg');
global.imagen3 = fs.readFileSync('./src/esc.png');
global.imagen4 = fs.readFileSync('./menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./menu3.png');
global.imagen7 = fs.readFileSync('./esc.jpg');
global.imagen8 = fs.readFileSync('./venao.jpg');
global.imagen9 = fs.readFileSync('./edit.mp4');

global.mods = [];

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nAlastor`;
global.gt = 'Alastor';
global.mysticbot = 'Alastor';
global.md = 'https://github.com/Argus628/Bastrap';
global.mysticbot = 'https://github.com/Argus628/Bastrap';
global.waitt = '*Cargando...*';
global.waittt = '*Cargando...*';
global.waitttt = '*Cargando...*';
global.nomorown = '5219993404349';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});

global.apikasu = "https://apikasu.onrender.com"
global.apikeykasu = "SebastianDevelop"