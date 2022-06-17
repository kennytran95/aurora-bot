const express = require('express');
require('dotenv').config()

const PORT = process.env.PORT || 5000;

const app = express();

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES'
  ]
})

const BOT_PREFIX = '!'

client.on('ready', () => {
  console.log('Aurora is awake')
})

let wordBank = [
  "maow. funny lookin aurora picture ya got there. maow.",
  "maow, it's maow channel",
  "That isn't me.. belly rubs pls",
  "MAOW?! What's that sound?! Oh it's just you posting not me in the channel...",
  "MAAAAOOOOOOWWW"
]

client.on('messageCreate', message => {
  if(message.content === `${BOT_PREFIX}focus`) {
    message.reply({
      content: `Quick shot to focus up! \n https://youtu.be/Np_38LZp_DM?t=11`
    })
  }
})

client.on('messageCreate', message => {
  if(message.content === `${BOT_PREFIX}thinkcard`) {
    message.reply({
      content: `🎮  Professional player for 2 years 🎮
      ⚖️  Coach for 6 years ⚖️
      ⏰  Only ever missed playoffs twice ⏰
      📢 airhorns 📢
      🏅 Top 4, 4 times 🏅
      📢 airhorns 📢
      🏆 Been to Finals 🏆
      🌏  Been to Worlds 3 times 🌏
      ✈️  Quarter Finals twice ✈️
      \n
      https://www.youtube.com/watch?v=Lzs6mlb25ns
      `
    })
  }
})

//if anyone except thomas talks in the aurora channel
client.on('messageCreate', message => {
  if(message.channel.id === '567613938158534666') {
    if(message.author.bot === false) {
      console.log('Dis iz auwora channel not urs. Meow.');
      let authorId = message.author.id;
      if(authorId !== '444684068567908363') {
        message.reply({
          content: wordBank[Math.floor(Math.random() * 5)],
        })
      }
    }
  }
})


//full fun commands
client.on('messageCreate', message => {
  let authorId = message.author.id;

  if(message.content === 'hi aurora') {
    message.reply({
      content: 'maow',
    })
  }

  if(message.content.includes('aurora')) {
    message.react("🐈");
    message.react("🥰");
    message.react("🐱");
  }

  //lux
  if(authorId === '221787450740178947') {
    if (message.content.includes('lux')) {
      if(message.author.bot === false) {
        message.reply({
          content: 'stop',
        })
        message.react("<:tubby:701568628331642950>");
      }
    }
  }

  //if shawn says adc
  if(authorId === '192822300289138690') {
    if (message.content.includes('adc')) {
      if(message.author.bot === false) {
        message.reply({
          content: 'https://www.youtube.com/watch?v=lJmFZYSn0TE',
        })
        message.react("<:slurp:661531184508960768>");
      }
    }
  }

  //thomas says feet
  if(authorId === '444684068567908363') {
    if (message.content === 'feet') {
      if(message.author.bot === false) {
        message.reply({
          content: 'Maow..?',
        })
        message.react('<:pimptubby:701569678685765693>');
      }
    }
  }

  //love typos
  if (message.content === 'i love typos') {
    if(message.author.bot === false) {
      message.reply({
        content: 'me too',
      })
      message.react('🇹');
      message.react('🇾');
      message.react('🇵');
      message.react('🇴');
      message.react('🇸');
    }
  }

  //quick shot
  if (message.content.includes('quick shot to focus up')) {
    message.reply({
      content: 'MAAAOOOOOWWWWWWWW',
    })
    message.react("<:tubby:701568628331642950>");
  }

  //thomas
  if(message.content.toLowerCase() === 'thomas') {
    message.reply({
      content: 'd-daddy...',
    })
  }

  //shawn
  if(message.content.includes('shawn')) {
    message.react("🍃");
    message.react("❓");
  }
})

client.login(process.env.BOT_TOKEN);
app.listen(PORT, () => {
  console.log(`Aurora is listening on port: ${PORT}`)
})