/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions 
  with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your 
  constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

function GameObject(att) {
  this.createdAt = att.createdAt;
  this.name = att.name;
  this.dimensions = att.dimensions;
}

GameObject.prototype.destroy = function() {
  return `${this.name} was removed from game.`;
}



/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

function CharacterStats(statAtt) {
  GameObject.call(this,statAtt);
  this.healthPoints = statAtt.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function() {
  return `${this.name} took damage.`;
}




/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humAtt) {
  CharacterStats.call(this,humAtt);
  this.team = humAtt.team;
  this.weapons = humAtt.weapons;
  this.language = humAtt.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);

Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}`;
}

 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if
  //   health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

//Hero---------------------------------------------------------------------------------------------------------------------------
function Hero(heroAtt) {
  Humanoid.call(this,heroAtt);
}
Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.heroDeath = function() {
  if (this.healthPoints === 0) {
    return `${this.name} has died! The Villain will reign unopposed!`
  }
}

Hero.prototype.spiritGuardians = function damage1(target) {
  target.healthPoints = target.healthPoints - 20;
  return `${this.name} summons the protectors of ${this.team}! They peck away at the eyes of ${target.name}!${target.name} takes 20 points of damage from the assault! Current health is now: ${target.healthPoints}`;
}

Hero.prototype.holyFire = function damage2(target) {
  target.healthPoints = target.healthPoints - 10;
  return `${this.name} buffets ${target.name} with holy flames! ${target.name} takes 10 points of damage! Current health is now: ${target.healthPoints}`;
}

Hero.prototype.forTheWin = function damage3(target) {
  target.healthPoints = target.healthPoints - 10;
  return `${this.name} calls upon: ${this.weapons}! ${this.team} calls down her power to smite ${target.name}! Current health is now: ${target.healthPoints}`;
}



//Villain-------------------------------------------------------------------------------------------------------------------------
function Villain(villAtt) {
  Humanoid.call(this,villAtt);
}
Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.villDeath = function() {
  if (this.healthPoints === 0) {
    return `${this.name} has died! The world has been saved!`
  }
}

Villain.prototype.weaponAttack = function damage4(target) {
  target.healthPoints = target.healthPoints - 10;
  return `${this.name} rakes ${target.name} with ${this.weapons}! ${target.name} takes 5 points of damage from each! Current health is now: ${target.healthPoints}`;
}

Villain.prototype.monologue = function(target) {
  return `${this.name} is confident in his victory and reveals his master plan to ${target.name}!`;
}

//Characters-----------------------------------------------------------------------------------------------------------------------
const Cleric = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 25,
  name: 'Tamlin the Black',
  team: 'The Raven Queen',
  weapons: [
    'Favor of the Queen',
  ],
  language: 'Common Tongue',
});

const Orc = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 3,
  },
  healthPoints: 40,
  name: 'Nightbringer',
  team: 'Warchief',
  weapons: [
    'Vicious Sickle',
    'Vicious Sickle',
  ],
  language: 'Common Tongue',
});


//The Fight-----------------------------------------------------------------------------------------------
console.log(Cleric.holyFire(Orc));
console.log(Orc.weaponAttack(Cleric));
console.log(Cleric.spiritGuardians(Orc));
console.log(Orc.weaponAttack(Cleric));
console.log(Orc.monologue(Cleric));
console.log(Cleric.forTheWin(Orc));
console.log(Orc.villDeath());

