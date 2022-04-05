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

client.on('message', message => {
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
  "You want meow to forget you? Okay forget meow tooooooo"
]

client.on('messageCreate', message => {
if(message.channel.id === '960718256908435517') {
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

client.login(process.env.BOT_TOKEN);