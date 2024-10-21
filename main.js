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


// Part 3: Class Features
// extending a class, the “child” class inherits all properties of its parents


class Adventurer extends Character {
    constructor (name, role) { // role is now extending the class Charactor properties 
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

// creating a companion class 

class Companion {
    constructor(name, type,) {
        this.name = name;
        this.type = type;
    }
}




// my coding practice of using objects
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

    }

}