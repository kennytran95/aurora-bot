require('dotenv').config()

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    'GUILDS',
    'GUILD_MESSAGES'
  ]
})

client.on('ready', () => {
  console.log('Aurora is awake')
})

client.on('messageCreate', (message) => {
  if(message.content === 'hi aurora') {
    message.reply({
      content: 'maow',
    })
  }
})

client.on('messageCreate', message => {
  if(message.content === 'aww aurora') {
    message.react("🐈");
    message.react("🥰");
    message.react("🐱");
  }
})

let wordBank = [
  "maow. this isn't aurora... Gimme fishie now",
  "maow, it's maow channel",
  "That isn't me.. Better pay up or else!",
  "You're not tubby... I'm on it blackshoe!",
  "You want meow to forget you? Okay forget meow tooooooo",
  "MAAAAOOOOOOWWW"
]

//if anyone except thomas talks in the aurora channel
client.on('messageCreate', message => {
if(message.channel.id === '567613938158534666') {
  if(message.author.bot === false) {
    console.log('Dis iz auwora channel not urs. Meow.');
    let authorId = message.author.id;
    if(authorId !== '444684068567908363') {
      message.reply({
        content: wordBank[Math.floor(Math.random() * 6)],
      })
    }
  }
}
})

//thomas says quick shot to focus up
client.on('messageCreate', message => {
  let authorId = message.author.id;
  if(authorId === '444684068567908363') {
    if (message.content === 'feet') {
      if(message.author.bot === false) {
        console.log('Maow?');
      }
    }
  }
})

//if shawn says weed
client.on('messageCreate', message => {
  let authorId = message.author.id;
  if(authorId === '192822300289138690') {
    if (message.content === 'adc') {
      if(message.author.bot === false) {
        console.log('https://www.youtube.com/watch?v=lJmFZYSn0TE');
      }
    }
  }
})

//peter says quick shot to focus up
client.on('messageCreate', message => {
  let authorId = message.author.id;
  if(authorId === '224431000699011072') {
    if (message.content === 'quick shot to focus up') {
      if(message.author.bot === false) {
        console.log('MAOWWWWWWWWW!');
      }
    }
  }
})

client.login(process.env.BOT_TOKEN);