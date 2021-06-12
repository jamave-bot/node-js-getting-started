// const dotenv = require('dotenv');
// dotenv.config();

// const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('./config.json');
client.once('ready', () => {
	console.log('Ready!');
});


// client.on('message', message => {

//     if (!message.content.startsWith(prefix) || message.author.bot) return;

//     const args = message.content.slice(prefix.length).trim().split(/ +/);
// 	const command = args.shift().toLowerCase();

// 	if (command === 'ping') {
// 		message.channel.send('Pong.');
// 	} else if (command === 'args-info') {
// 		if (!args.length) {
// 			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
// 		}

// 		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
// 	}

// });



client.on('message', message =>{

    if (message.author.bot) return
    // if(message.author.username == 'crustyfire'){
    //     message.channel.send("STOP SPOILING SHIT BCHRIS U FUK 😡😡😡😡😡😡")
    //     return 
    // }

    // if(message.author.username === 'wei'){
    //     if(message.content.toLowerCase().includes('my son')){
    //         message.channel.send("Bobert's son right? Right")
    //     }else if (message.content.toLowerCase().includes('mi son')){
    //         message.channel.send("Hijo de Boberto si? Si.")
    //     } else if (message.content.toLowerCase() === "test"){
    //         message.channel.send("TEST RECEIVED CAPN")
    //     }else if (message.content.toLowerCase().includes("mi hijo")){
    //         message.channel.send("Bobert's hijo*")
    //     }
    // } 
    
    
    if (message.content.toLowerCase().includes("deku")){
        message.channel.send("DEKUUUUUUUUUU \nwhy're you such a SUSSSssSysyYS BAKAAAAA")
    } 
        if(message.content.toLowerCase().startsWith('#uwu') && !message.content.startsWith("<:")){
        const emojiArr = [
        "ヾ(•ω•`)o", 
        "(* ￣3)(ε￣ *)",
         "ヽ(✿ﾟ▽ﾟ)ノ",
        "o(≧∀≦)o",
        "(´▽`ʃ♡ƪ)",
        "（〃｀ 3′〃）",
        "(►__◄)",
        "😫😫😫😫😫",
        "(✿◡‿◡)",
        "(/≧▽≦)/",
        "o(*￣▽￣*)ブ",
        "♪(´▽｀)",
        "(o゜▽゜)o☆"
        ]
        const readMessage = message.content
        const wordsArr = readMessage.split(' ')
        if (wordsArr.length===1){
            message.channel.send("UwU~~" + "\n" + emojiArr[Math.floor(Math.random()*emojiArr.length)])
            return
        }
        wordsArr.splice(0,1)
        let uwuArr = wordsArr.map(word => {
            let uwuWord;
            uwuWord = word.replace(/r/g,'w')
            uwuWord = uwuWord.replace(/l/g,'w')
            uwuWord = uwuWord.replace(/R/g,'w')
            uwuWord = uwuWord.replace(/L/g,'w')
            // console.log(uwuWord)
            console.log(message.author.username)
            return uwuWord
        })

        message.channel.send(uwuArr.join(" ") + "~~" + " " +  "\n" + emojiArr[Math.floor(Math.random()*emojiArr.length)])
    }


})
client.login(process.env.dosc);