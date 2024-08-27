"use strict";

// Prototypical Object Orientation
// The classical object-orientation based on objects or prototypes

// Object.create()

const settlement = {
  name: "Default",
  population: 300,
  numberOfBulidings: 30,
  build: function (building) {
    console.log(`A ${building} has been built in ${this.name}.`);
    this.numberOfBulidings++;
    console.log(
      `Number of buildings in ${this.name}: ${this.numberOfBulidings ? this.numberOfBulidings : "unregistered"}`
    );
  },
  demolish: function (building) {
    console.log(`A ${building} has been demolished in ${this.name}.`);
    this.numberOfBulidings--;
    console.log(
      `Number of buildings in ${this.name}: ${this.numberOfBulidings ? this.numberOfBulidings : "unregistered"}`
    );
  },
};

// creating new objects based on a prototype

const city = Object.create(settlement);
const village = Object.create(settlement);

// defining properties in inheriting objects

city.name = "Texton City";
city.population = 45000;
city.numberOfBulidings = 12000;

// defining methods in inheriting objects

city.sportEvent = function (sportEvent) {
  console.log(`In ${this.name} we organized a ${sportEvent}. The number of participants: ${this.population * 0.01}`);
};

// overwiting methods

city.demolish = function () {
  console.log(`Currently demolition is prohibited by law.`);
};

// calling methods of prototype

const ruralVillage = Object.create(village);
ruralVillage.build = function (building) {
  if (building === "stadium") {
    console.log(`Makes no sense.`);
  } else {
    Object.getPrototypeOf(this).build.call(this, building);
  }
};

ruralVillage.name = "Greenfield";
ruralVillage.population = 500;
