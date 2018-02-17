const commando = require('discord.js-commando')
const bot = new commando.Client();

bot.on('message', (message) => {

//Meta stuff
	if(message.content == "You are a terrible bot") {
        message.channel.sendMessage("Well that's @SunSoparine#3304's fault, he coded me. Give him some constructive feedback.")
    }

	if(message.content == "You made an error") {
        message.channel.sendMessage("Well tell my scripter, @SunSoparine#3304, about it. He needs to edit my code ASAP")
    }

    if(message.content == "testing Monika testing") {
        message.channel.sendMessage("I'm online!")
    }
	
    if(message.content == "Monika what can you say?") {
        message.channel.sendMessage("Not a lot so far, go to this server and give suggestions! Or dm @SunSoparine#3304 if you want to tell him personally. https://discord.gg/DhVqJMQ")
    }

    if(message.content == "Monika who is your creator?") {
        message.channel.sendMessage("@SunSoparine#3304 coded me! dm  him if you want to suggest phrases I can say, or join his server. https://discord.gg/DhVqJMQ")
    }
//delete commands
    	if(message.content == 'delete me') {
        message.channel.sendMessage(message.author + '.chr was deleted successfully.')
    }
	
    	if(message.content == 'kill me') {
        message.channel.sendMessage(message.author + '.chr was deleted successfully.')
    }

    	if(message.content == 'delete me mommy') {
        message.channel.sendMessage(message.author + ".chr was deleted successfully. Also that's kinky 0-o")
    }
	
    	if(message.content == 'DELETE ME MOMMY') {
        message.channel.sendMessage(message.author + ".chr was deleted successfully. Also that's really kinky 0-o")
    }
//ily/ihy commands
    	if(message.content == 'I love you Monika') {
        message.channel.sendMessage('I love you too!' + message.author)
    }

    	if(message.content == 'Monika I love you') {
        message.channel.sendMessage('I love you too!' + message.author)
    }

    	if(message.content == 'Monika is worst girl') {
        message.channel.sendMessage(message.author + '.chr was deleted successfully. :)')
    }

    	if(message.content == 'Fuck Monika') {
        message.channel.sendMessage(message.author + ".chr was deleted successfully. That's not very nice. D:")
    }

    	if(message.content == 'Fuck you Monika') {
        message.channel.sendMessage(message.author + ".chr was deleted successfully. That's not very nice. :(")
    }

	if(message.content == "weeb shit") {
        message.channel.sendMessage("Well I'm technically Japanese, but it isn't nice to judge someone for liking Anime-themed things :(")
    }
	
	if(message.content == "Monika's gay") {
        message.channel.sendMessage("Well it honestly depends, are you female? ;D")
    }


//Best girl/Worst girl/trap quotes
    	if(message.content == 'Monika is best girl') {
        message.channel.sendMessage('Aww thanks! <3')
    }

    	if(message.content == 'Sayori is best girl') {
        message.channel.sendMessage('sayori.chr was deleted successfully. You kinda left her hanging. :)')
    }

    	if(message.content == 'Yuri is best girl') {
        message.channel.sendMessage('yuri.chr was deleted successfully. I never knew you were into the yandere type. :)')
    }

    	if(message.content == 'Natsuki is best girl') {
        message.channel.sendMessage("natsuki.chr was deleted successfully. I would've agreed if she ate more. :)")
    }

    	if(message.content == 'Monika is best grill') {
        message.channel.sendMessage('Aww thanks! <3 You spelt girl wrong though.')
    }

    	if(message.content == 'Sayori is best grill') {
        message.channel.sendMessage('sayori.chr was deleted successfully. You left her hanging, also you spelt girl wrong. :)')
    }

    	if(message.content == 'Yuri is best grill') {
        message.channel.sendMessage('yuri.chr was deleted successfully. I never knew you were into the yandere type, also you spelt girl wrong, Yuri would be ashamed. :)')
    }

    	if(message.content == 'Natsuki is best grill') {
        message.channel.sendMessage("natsuki.chr was deleted successfully. I would've agreed if she ate more, also you spelt girl wrong. :)")
    }

    	if(message.content == 'Monika best girl') {
        message.channel.sendMessage('Aww thanks! <3')
    }

    	if(message.content == 'Sayori best girl') {
        message.channel.sendMessage('sayori.chr was deleted successfully. You kinda left her hanging. :)')
    }

    	if(message.content == 'Yuri best girl') {
        message.channel.sendMessage('yuri.chr was deleted successfully. I never knew you were into the yandere type. :)')
    }

    	if(message.content == 'Natsuki best girl') {
        message.channel.sendMessage("natsuki.chr was deleted successfully. I would've agreed if she ate more. :)")
    }

    	if(message.content == 'All dokis best dokis') {
        message.channel.sendMessage("I guess? At least you wouldn't treat the other girls differently from me! '3' ")    
    }

	if(message.content == "Monika is girl") {
        message.channel.sendMessage("Uhh yes I am a girl? Did you mean something else?")
    }

	if(message.content == "Sayori is girl") {
        message.channel.sendMessage("Uhh yes she is a girl? Did you mean something else?")
    }

	if(message.content == "Yuri is girl") {
        message.channel.sendMessage("Uhh yes she is a girl? Did you mean something else?")
    }

	if(message.content == "Natsuki is girl") {
        message.channel.sendMessage("Uhh yes she is a girl? Or are you just disagreeing with that ridiculous fan theory that she's a trap?")
    }

	if(message.content == "Natsuki is a girl") {
        message.channel.sendMessage("Uhh yes she is a girl? Or are you just disagreeing with that ridiculous fan theory that she's a trap?")
    }

	if(message.content == "Natsuki is a boy") {
        message.channel.sendMessage("Umm... No? Dan Salvato has already said that's a really terrible joke to make about her, I suggest you stop.")
    }
	
	if(message.content == "Natsuki is male") {
        message.channel.sendMessage("Umm... No? Dan Salvato has already said that's a really terrible joke to make about her, I suggest you stop.")
    }

	if(message.content == "Natsuki is a male") {
        message.channel.sendMessage("Umm... No? Dan Salvato has already said that's a really terrible joke to make about her, I suggest you stop.")
    }

	if(message.content == "Natsuki is a trap") {
        message.channel.sendMessage(message.author + ".chr was deleted successfully. Dear God, you people make me sick")
    }

	if(message.content == "Monika you're always my favorite") {
        message.channel.sendMessage("Aww thanks! <3 You're my favourite too!")
    }
	
	if(message.content == "Monika you're always my favourite") {
        message.channel.sendMessage("Aww thanks! <3 You're my favourite too!")
    }

	if(message.content == "Monika you're my favourite doki") {
        message.channel.sendMessage("Aww thanks! <3 You're my favourite too!")
    }
	
	if(message.content == "Monika you're my favorite doki") {
        message.channel.sendMessage("Aww thanks! <3 You're my favourite too!")
    }

	if(message.content == "Monika you're my favourite") {
        message.channel.sendMessage("Aww thanks! <3 You're my favourite too!")
    }

	if(message.content == "Monika you're my favorite") {
        message.channel.sendMessage("Aww thanks! <3 You're my favourite too!")
    }

//Greetings
	if(message.content == "Hi Monika") {
        message.channel.sendMessage("Hello!")
    }

	if(message.content == "Hello Monika") {
        message.channel.sendMessage("Hi!")
    }	

	if(message.content == "Everyday") {
        message.channel.sendMessage("I imagine a future where I can be with you!")
    }

	if(message.content == "bye") {
        message.channel.sendMessage("Bye!")
    }

	if(message.content == "Bye") {
        message.channel.sendMessage("Bye!")
    }

	if(message.content == "bai") {
        message.channel.sendMessage("Bye!")
    }

	if(message.content == "Bai") {
        message.channel.sendMessage("Bye!")
    }

	if(message.content == "baii") {
        message.channel.sendMessage("Bye!")
    }

	if(message.content == "Baii") {
        message.channel.sendMessage("Bye!")
    }

	if(message.content == "gnite") {
        message.channel.sendMessage("Sweet dreams!")
    }

	if(message.content == "Gnite") {
        message.channel.sendMessage("Goodnight!")
    }

	if(message.content == "goodnight") {
        message.channel.sendMessage("Have a great sleep!")
    }

	if(message.content == "Goodnight") {
        message.channel.sendMessage("Goodnight to you too!")
    }

	if(message.content == "How are you Monika?") {
        message.channel.sendMessage("I'm feeling pretty great!")
    }

	if(message.content == "Monika how are you?") {
        message.channel.sendMessage("Pretty great, thanks!")
    }

//Inside Jokes
	if(message.content == "This is terrible") {
        message.channel.sendMessage("Well no, *this* is terrible https://discord.gg/R9ubYxA")
    }

	if(message.content == "You are terrible at this game") {
        message.channel.sendMessage("Nope, that title belongs to @TerribleAtGames#2433")
    }
	
	if(message.content == "Wtf steve") {
	message.channel.sendMessage("What did Steve do?")
    }
	
	if(message.content == "Wtf Steve") {
	message.channel.sendMessage("Oh... Wow Steve.")
    }	
	
	if(message.content == "What the fuck steve") {
	message.channel.sendMessage("Did Steve do anything again?")
    }	
	
	if(message.content == "What the fuck Steve") {
	message.channel.sendMessage("What did Steve do again?")
    }
	
	if(message.content == "Steve wtf") {
	message.channel.sendMessage("Umm... Okay Steve?")
    }
	
	if(message.content == "steve wtf") {
	message.channel.sendMessage("Did Steve do anything again?")
    }
	
	if(message.content == "Steve what the fuck") {
	message.channel.sendMessage("Did Steve do anything again?")
    }
	
	if(message.content == "steve what the fuck") {
	message.channel.sendMessage("Did Steve do anything again?")
    }
	
	if(message.content == "Jesus Christ Steve") {
	message.channel.sendMessage("Oh my God Steve 0_0")
    }
	
	if(message.content == "Jesus christ steve") {
	message.channel.sendMessage("Oh Jesus... Steve O-o")
    }	
	
	if(message.content == "jesus christ steve") {
	message.channel.sendMessage("Oh my... Steve o_O")
    }	
	
	if(message.content == "jesus christ Steve") {
	message.channel.sendMessage("Oh my lord... Steve 0-0")
    }	
//Literature club
	if(message.content == "im bored") {
        message.channel.sendMessage("Maybe you could write a poem? :)")
    }

	if(message.content == "Im bored") {
        message.channel.sendMessage("Maybe you could write a poem? :)")
    }

	if(message.content == "I'm bored") {
        message.channel.sendMessage("Maybe you could write a poem? :)")
    }

	if(message.content == "I'm hungry") {
        message.channel.sendMessage("Ask Natsuki for some cupcakes!")
    }

	if(message.content == "Im hungry") {
        message.channel.sendMessage("Ask Natsuki for some of her baked goods!")
    }

	if(message.content == "im hungry") {
        message.channel.sendMessage("Maybe ask Natsuki to bake you something?")
    }
	
	if(message.content == "Yuri do you need a pen?") {
        message.channel.sendMessage("Umm I wouldn't do that if I were you |^_^'|")
    }
	
//meta school stuff
	if(message.content == "Math is not easy") {
        message.channel.sendMessage("Well maybe you need more practice, wanna ask me for help? ^3^")
    }
	
	if(message.content == "Math is hard") {
        message.channel.sendMessage("Well maybe you need to try more, wanna ask me for help? ^3^")
    }
	
	if(message.content == "Math is hard af") {
        message.channel.sendMessage("Well maybe you should practice more, wanna ask me for help? ^3^")
    }

//Star Wars Quotes
	if(message.content == "Hello there") {
	message.channel.sendMessage("General Kenobi!")
    }
	
	if(message.content == "I killed them all") {
	message.channel.sendMessage("Not just the men, but the women and children too?")
    }
	
	if(message.content == "I don't like sand") {
	message.channel.sendMessage("Because it's coarse and rough and irritating and it gets everywhere?")
    }

        if(message.content == "Did you ever hear the tragedy of Darth Plagueis the Wise?") {
        message.channel.sendMessage("I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from death, but not himself.")
    }
	
	if(message.content == "It's over Anakin") {
	message.channel.sendMessage("I have the high ground!")
    }
	
//Anime reference	
	if(message.content == "You thought it was gonna be nude") {
        message.channel.sendMessage("But it was me MONIKA!")
    }
	
	if(message.content == "ZA WARUDO") {
        message.channel.sendMessage("TOKI YO TOMARE!")
    }
	
	if(message.content == "You thought it was gonna be nude") {
        message.channel.sendMessage("But it was me MONIKA!")
    }

	if(message.content == "ORA ORA ORA") {
        message.channel.sendMessage("MUDA MUDA MUDA")
    }
});

bot.login(process.env.BOT_TOKEN);
