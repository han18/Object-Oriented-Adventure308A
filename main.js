// this lab is part of the OOP lesson

// Part 1: Humble Beginnings

const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: {
      Leo: {
        name: "Frank",
        type: "Flea",
        belongings: ["hat", "sunglasses"],
      },
             },
    type: "Cat",
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
adventurer.roll()