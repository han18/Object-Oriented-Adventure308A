// this lab is part of the OOP lesson

// Part 1: Humble Beginnings

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    companion: {
      name: "Frank",
      type: "Flea",
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

console.log(adventurer.inventory[0]);
console.log(adventurer.inventory[2]);

// creating a loop to log each item in the robin's inventory
for (const x in adventurer) {
  console.log(adventurer[x]);
}

//calling the method roll to test
adventurer.roll();

// Part 2: Class Fantasy

// this class is the template object
class Character {
    static MAX_HEALTH = 100;  // adding the static 
    
    constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  }

}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];

robin.companion.companion.roll();

// Part 3: Class Features
// extending a class, the “child” class inherits all properties of its parents Character


class Adventurer extends Character {
    static roles = ["Fighter", "Healer", "Wizard"]; // the static roles
    constructor (name, role) { // role is now extending the class Charactor properties 
      super(name);
      if (!Adventurer.roles.includes(role)) {
        throw new Error("Invalid role!");
      }
      // Adventurers have specialized roles.
    //   this.role = role;
    //    this.role = ["Fighter", "Healer", "Wizard", "Defender"] // adding static properties
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }

    // creating a method deul() within the adventure extend class
    duel(opposing) {
        while (this.health > 50 && opposing.health > 50) {
          const myRoll = this.roll();
          const opponentRoll = opposing.roll();
          if (myRoll > opponentRoll) {
            opposing.health -= 1;
          } else {
            this.health -= 1;
          }
          console.log(`${this.name} (Health: ${this.health}) vs ${opposing.name} (Health: ${opposing.health})`);
        }
        const winner = this.health > 50 ? this.name : opposing.name;
        console.log(`${winner} wins the duel!`);
      }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    
  }

const adventurerRobin = new Adventurer("Robin", "Fighter");
const adventurerLeo = new Adventurer("Leo", "Healer");

const adventurerOne = new Adventurer("Robin", "Fighter");
const adventurerTwo = new Adventurer("Leo", "Healer");

// adventurerOne.duel(adventurerTwo);

// creating and extending a companion class 

class Companion extends Character {
    constructor(name, type, eatMeat, legs) {
        super(name);
        this.type = type;
        this.eatMeat = eatMeat = true;
        this.legs = legs;
    }

    walk(){
        return `${this.name} walks with ${legs}`
    }
}


const newRobin = new Companion("Birdy", "bird", "scarf and shoes", true, 2 );
console.log(newRobin);

// Part 4: Class Uniforms --- added the static properties

// Part 5: Gather your Party
class AdventurerFactory {
    constructor(role) {
      this.role = role;
      this.adventurers = [];
    }
  
    generate(name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
      return newAdventurer;
    }
  
    findByIndex(index) {
      return this.adventurers[index];
    }
  
    findByName(name) {
      return this.adventurers.find(a => a.name === name);
    }
  }
  
  const healerFactory = new AdventurerFactory("Healer");
  const robinTwo = healerFactory.generate("Robin");
  
//   Part 6: Developing Skills --- added the duel to the extened adventure 




//=======================================================================
// my coding practice to review the OOP process
  class Person {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
  }

  const Student = new Person('Kira', "20", "Manhattan");

  console.log(Student);

// now creating a sub-class to extend the Person class
class Human extends Person {
    constructor(name, age, city, country) { // this means we are extending the Person class with the original properties to not duplicate it and adding more properties 
        // we extended the new property country
        //super means we call the main class constructor and call its params/arguments again 
        super(name, age, city)
        this.country = country;

    }

}

const human1 = new Human("jack", "19", "Bronx", "Canada");

console.log(human1);

const person2 = new Person("Jole", "30", "Queens", "Japan"); // japan will not work because its not the extended class with new properties country
console.log(person2)