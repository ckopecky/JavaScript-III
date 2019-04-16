/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
//constructor function for GameObject:

function GameObject(attributes){
  this.createdAt = attributes.createdAt;
  this.dimensions = attributes.dimensions;
  // this.destroy = function (){
  //   return `${this.name} was removed from the game`;
  // };
}

//methods of the GameObject constructor
GameObject.prototype.destroy = function(){
  return `${this.name} was removed from the game`;
}

//CharacterStats constructor function:
function CharacterStats(characterStatsAttributes){
  //call lets us gain access to the GameObject attributes in addition to the characterStatsAttributes
  GameObject.call(this, characterStatsAttributes);
  this.healthPoints = characterStatsAttributes.healthPoints;
  this.name = characterStatsAttributes.name;
  // this.takeDamage = function (){
  //   `${this.name} took damage.`
  // };
}

//Gives CharacterStats access to all the methods that GameObject has. 
CharacterStats.prototype = Object.create(GameObject.prototype);

//CharacterStats methods: 
CharacterStats.prototype.takeDamage = function(){
  return `${this.name} took damage.`;
}

//Humanoid constructor function
function Humanoid(humanoidAttributes){
  //call allows us access to CharacterStats attributes in addition to the humanoid's own attributes
  CharacterStats.call(this, humanoidAttributes);
  this.faction = humanoidAttributes.faction;
  this.weapons = humanoidAttributes.weapons;
  this.language = humanoidAttributes.language;
  this.team = humanoidAttributes.team;
  // this.greet = function (){
  //   return `${this.name} offers a greeting in ${this.language}.`;
  // };
}

//Gives Humanoids access to all the methods that CharacterStats has. 
Humanoid.prototype = Object.create(CharacterStats.prototype);

//Humanoid methods:
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

//Hero constructor function:
function Hero(heroAttributes){
  //call allows the access to attributes from Humanoid plus all the heroAttributes
  Humanoid.call(this, heroAttributes);
  this.magic = heroAttributes.magic;
  this.defenseMechanisms = heroAttributes.defenseMechanisms;
  this.allies = heroAttributes.allies;
  // this.attack = function (){
  //   //causes 3 dmg to villain
  // };
  // this.masterAttack = function (){
  //   //causes super awesome 5dmg attack to villain
  // };
  // this.usesMagic = function (){
  //   //uses magic to cause 4 dmg to villain
  // };
}

//Allows access to all the methods from Humanoid
Hero.prototype = Object.create(Humanoid.prototype);

//Hero Methods:

Hero.prototype.attack = function() {
  //cause 3 dmg to villain
  return evil.healthPoints = evil.healthPoints - 3;
}

Hero.prototype.masterAttack = function() {
  //cause 5 dmg to villain
  return evil.healthPoints = evil.healthPoints - 5;
}

Hero.prototype.usesMagic = function(){
  //uses magic to cause 4 dmg to villain
  return evil.healthPoints = evil.healthPoints - 4;
}

function Villain(villainAttributes){
  //allows access to humanoid attributes in addition to villain attributes
  Humanoid.call(this, villainAttributes);
  this.magic = villainAttributes.magic;
  this.defenseMechanisms = villainAttributes.defenseMechanisms;
  this.allies = villainAttributes.allies;
  // this.firstAttack = function (){
  //   //causes 1 dmg to hero
  // };
  // this.secondAttack = function (){
  //   //causes super awesome 5dmg attack to hero
  // };
  // this.thirdAttack = function (){
  //   //causes 2 dmg to hero
  // }
  // this.usesMagic = function (){
  //   //uses magic to cause 3 dmg to hero
  // };
}

//lets us inherit all the Humanoid's methods
Villain.prototype = Object.create(Humanoid.prototype);

//Villain methods:
Villain.prototype.firstAttack = function() {
  //causes 1 dmg to hero
  return link.healthPoints = link.healthPoints - 1;
}

Villain.prototype.secondAttack = function() {
  //causes super awesome 5dmg attack to hero
  return link.healthPoints = link.healthPoints - 5;
}

Villain.prototype.thirdAttack = function() {
  //causes 2 dmg to hero
  return link.healthPoints = link.healthPoints - 2;
}

Villain.prototype.usesMagic = function() {
  //uses magic to cause 3 dmg to hero
  return link.healthPoints = link.healthPoints - 3;
}



/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


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

  const link = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 4,
    },
    healthPoints: 18,
    name: 'Link',
    faction: 'Hyrule',
    weapons: [
      'Master Sword',
      'Bombs',
      'Bow and Arrows',
    ],
    language: 'Elvish',
    defenseMechanisms: ['shield', 'armor'],
    allies: ['Zelda', 'Forest Kingdom faction'],
    magic: 'magic wand',
  });

  const evil = new Villain({
   createdAt: new Date(),
   dimensions: {
      length: 3,
      width: 1,
      height:6,
    },
   healthPoints:35,
   name: 'Ganondorf',
   weapons: [
    'Sword',
      ],
   defenseMechanisms: ['shield', 'armor'],
   allies: ['Mage Guild',],
   magic: 'magic staff',
  })
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
  console.log(link.language);
  console.log(evil.defenseMechanisms);
  console.log(link.healthPoints);
  console.log(evil.firstAttack());
  console.log(link.usesMagic());
  console.log(link.healthPoints);



  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!