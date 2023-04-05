/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

// Create a variable for john and jamie's attack 

//Before the battle begins, Jon and Jamie decide to compare attack strengths to get insight into who might win this battle. Using an if-else statement, console.log who has the greater attack strength.
//What if we have a tie? Our code would actually give the win to Jamie, which is no good. Add in an else if to resolve this.

let johnSnowAttack = 25
let jamieLannisterAttack = 55

if (johnSnowAttack > jamieLannisterAttack) {
    console.log(`john's attack is greater`);
} else if (johnSnowAttack == jamieLannisterAttack) {
    console.log('Even match');
} else {
    console.log(`Jamie's attack is greater`);
}

//Jamie, knowing he is the superior, initiates a fight with Jon. Let’s create some additional stats for Jon Snow so we can see how this plays out.

let johnSnowHealth = 100
let johnSnowDefence = 0

//Jamie attacks first - use an if/else to determine if Jon Snow can survive the attack. If he does not, console.log “Jon Snow has been slain.” Otherwise, condole.log Jon Snow’s health.

if (jamieLannisterAttack >= johnSnowHealth) {
    console.log('Jon Snow has been slain.');
} else {
    johnSnowHealth -= jamieLannisterAttack
    //console.log(johnSnowHealth - jamieLannisterAttack)
    console.log(johnSnowHealth);
}

//Jon Snow, adamant he does not want to fight Jamie (can you blame him?), picks up a shield to help defend himself. Increase Jon’s defense by 25.

johnSnowDefence += 25;

//Jamie attacks again - use an if/else to determine if Jon Snow can survive the attack. Make sure to account for Jon’s defense. If he does not, console.log “Jon Snow has been slain.” Otherwise, console.log Jon Snow’s health.

if (jamieLannisterAttack >= (johnSnowAttack + johnSnowHealth)) {
    console.log(`John snow has been slain`)
} else {
    johnSnowHealth = johnSnowHealth + johnSnowDefence - jamieLannisterAttack
    console.log(johnSnowHealth)
}

// One of the town’s people, obviously wanting Jon Snow to win, throws Jon a health kit. This health kit can raise Jon’s health by 50pts. However, Jon’s health cannot exceed 100. Using an if else statement, raise Jon’s health to the appropriate level.

if ((johnSnowHealth + 50) >= 100) {
    johnSnowHealth = 100
} else {
    johnSnowHealth += 50
}

//Jamie, realizing this might take a while to beat Jon, decides to flip a coin, and if the coin lands on heads, he will aim to take Jon’s head. If it lands on tails, Jamie will allow Jon to run away. Create a variable called coinLandsHeads and set it equal to false. Then, using an if-else statement and the equality operator, handle the value of the flipped coin (handle for both true and false).

let coinLandsHeads = false




//

while (johnSnowHealth > 0) {
    johnSnowHealth = johnSnowHealth - (jamieLannisterAttack - johnSnowDefence)
    console.log(`john snow health is ${johnSnowHealth}`)
    if (johnSnowHealth <= 0) {
        console.log(`john has been slain`)
    }
}