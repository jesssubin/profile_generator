const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name ? Nicknames are also acceptable :\)', (name) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${name}`)

  rl.question('What is an activity you like doing?', (activity) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${activity}`)

    rl.question('What do you listen to while doing that?', (music) => {
      // TODO: Log the answer in a database
       console.log(`Thank you for your valuable feedback: ${music}`)

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
      // TODO: Log the answer in a database
         console.log(`Thank you for your valuable feedback: ${meal}`)

        rl.question('What\'s your favourite thing to eat for that meal?', (menu) => {
      // TODO: Log the answer in a database
         console.log(`Thank you for your valuable feedback: ${menu}`)

          rl.question('Which sport is your absolute favourite?', (sport) => {
        // TODO: Log the answer in a database
             console.log(`Thank you for your valuable feedback: ${sport}`)

            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
             // TODO: Log the answer in a database
               console.log(`Thank you for your valuable feedback: ${superpower}`)

    //paragraph literal interpolation 
    console.log(`Hi My name is ${name}, I like ${activity} and I like listening to ${music} when I do ${activity}. 
    My favorite meal of the day is ${meal}, especially ${menu}. My favorite sport is ${sport} and my superpower is ${superpower}. Thank you!`); 

              rl.close();
            })
          })
        })
      })
    })
  })
});


