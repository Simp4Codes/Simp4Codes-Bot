const Discord = require('discord.js');
const bot = new Discord.Client

const token = "your bot's token";

const PREFIX = '-';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', msg=>{
    if(msg.content === "hi"){
        msg.reply('Hey wanna come over to my house i got candy');
    }
})


    


bot.on('message' , msg=>{
    let args = msg.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
        case 'ping':
        msg.channel.send('pong!')
        break;
    
    case 'clear':
        if (!args[1]) return msg.reply('Error please define second arg')
        msg.channel.bulkDelete(args[1]);
        break;
       
        case 'help':
            msg.channel.send('**Commands Available:**```-ping ``````-grape``````-wow``````-run``````-dance``````-story``````-howgay``````-porn``````-thiccpancake``````-tellmeahorribletrade1``````-tellmeahorribletrade2``````-tellmeahorribletrade3``````-horribletrades```')
            break;
        case 'grape':
            msg.channel.send('https://cdn.discordapp.com/attachments/744674900572241972/745353238437429398/2Q.png')
            break;
        case 'wow':
            msg.channel.send('https://cdn.discordapp.com/attachments/732211281410654219/736656097452228639/d5v0z5n-ba837eb1-1cfb-4f36-9487-2294140721f7.jpg')
            break;
        case 'run':
            msg.channel.send('https://cdn.discordapp.com/attachments/732211281410654219/736656265031319552/583f761fa1dfd2416efc6004b9d4603f-1.gif')
            break;
        
        case 'dance':
            msg.channel.send('https://cdn.discordapp.com/attachments/736469499053735987/736815375521546240/a0501e0c5659dcfde397299e4234e75a.gif')
            break;
        case 'story':
            msg.channel.send('**Pick from the following stories by typing** ```-story1``````-story2``````-story3```')
            break;
        case 'story1':
            msg.channel.send('**The old new house**```We bought an old house, my boyfriend and I. Hes in charge of the "new" construction  converting the kitchen in to the master bedroom for instance, while Im on wallpaper removal duty. The previous owner papered EVERY wall and CEILING! Removing it is brutal, but oddly satisfying. The best feeling is getting a long peel, similar to your skin when youre peeling from a sunburn. I dont know about you but I kinda make a game of peeling, on the hunt for the longest piece before it rips.Under a corner section of paper in every room is a person’s name and a date. Curiosity got the best of me one night when I Googled one of the names and discovered the person was actually a missing person, the missing date matching the date under the wallpaper! The next day, I made a list of all the names and dates. Sure enough each name was for a missing person with dates to match. We notified the police who naturally sent out the crime scene team. I overhead one tech say "yup, its human." Human? Whats human? "Maam, where is the material you removed from the walls already? This isnt wallpaper you were removing.```')
            break;
        case 'story2':
            msg.channel.send('**Whats in the basement?**```Mommy told me never to go in the basement, but I wanted to see what was making that noise. It kind of sounded like a puppy, and I wanted to see the puppy, so I opened the basement door and tiptoed down a bit. I didn’t see a puppy, and then Mommy yanked me out of the basement and yelled at me. Mommy had never yelled at me before, and it made me sad and I cried. Then Mommy told me never to go into the basement again, and she gave me a cookie. That made me feel better, so I didn’t ask her why the boy in the basement was making noises like a puppy, or why he had no hands or feet.```')
            break;
        case 'story3':
            msg.channel.send('**This is not a story**```This is me. Im here. Im shifting the words that youre reading, altering them from whatever this person wrote. Ive been here for awhile. For as long as you can remember, anyway. Sometimes I say your name as yo’re falling asleep, or whisper urgently in your ear. Do you remember the time that I screamed, throwing panic through you and setting your heart racing? That was fun. Youre wondering who I am. Thats only natural. Of course, you already know. Im you. Im the real you. I’m the mind that existed here before you stole my body, before you forgot about being a parasite. Im the child who looked the wrong way, asked the wrong question, saw the wrong thing… but Im not so little any more. You may have forgotten me, but Im still here. Ive always been here. Im going to get out.```')
             break;
        case 'howgay':
            msg.reply('Lmfao, you are too gay to measure :rofl:')
            break;
        case 'porn':
            msg.channel.send('https://cdn.discordapp.com/attachments/724386791645511780/740790426893680740/9k.png')
            break;
        case 'thiccpancake':
            msg.channel.send('https://cdn.discordapp.com/attachments/724386791645511780/740792188627189780/Z.png')
            break;
        case 'horribletrades':
            msg.channel.send ('**This bot was made by:** @herpes_#1918  **&** @LunaGhost#8415')
            break;
        case 'tellmeahorribletrade1':
            msg.channel.send('Okay, 1 cookie for 1 Month nitro.')
            break;
        case 'tellmeahorribletrade2':
            msg.channel.send('Okay, 3 cookies for 1 Classic nitro.')
            break;
        case 'tellmeahorribletrade3':
            msg.channel.send('Okay, 1 carrot for 4 Classic nitro.')
            break;
        
        
            
                    
        case 'embed':
            const embed = new Discord.RichEmbed()
        }
})


        
 
    
    
bot.login(token);