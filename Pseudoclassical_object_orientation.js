"use strict";

// Pseudoclassical Object Orientation
// based on use of constructor functions

function Settlement(name, population, numberOfBuildings) {
  this.name = name;
  this.population = population;
  this.numberOfBuildings = numberOfBuildings;
}

// const place = new Settlement("defaultPlace", 10000, 3200);

// Defining methods that are common to all object instances

Settlement.prototype.build = function (building) {
  console.log(`A ${building} has been built in ${this.name}.`);
  this.numberOfBuildings++;
  console.log(
    `Number of buildings in ${this.name}: ${this.numberOfBuildings ? this.numberOfBuildings : "unregistered"}`
  );
};
Settlement.prototype.demolish = function (building) {
  console.log(`A ${building} has been demolished in ${this.name}.`);
  this.numberOfBuildings--;
  console.log(
    `Number of buildings in ${this.name}: ${this.numberOfBuildings ? this.numberOfBuildings : "unregistered"}`
  );
};

// creating a "subclass"

function City(name, population, numberOfBuildings, established) {
  Settlement.call(this, name, population, numberOfBuildings);
  this.established = established;
}

// but there is no link between Settlement and City yet
// constructor fn works but inheritance does not

// console.log() does not show the difference bc of how it refreshes data, have to check with console commands

City.prototype = new Settlement();

// now inheritance works but missing the required constructor fn, have to add it back

City.prototype.constructor = City;

// finally we can define the properties and methods of the subclass
// have to define them on the prototype to be available of all instances

City.prototype.gathering = function (gathering) {
  console.log(`New upcoming event in ${this.name}: ${gathering}`);
};
City.prototype.weatherReport = function (weather) {
  console.log(`The weather will be ${weather} in the next 6 hours.`);
};

// creating an instance

const c1 = new City("Hammerville", 12000, 4800, 1760);
const c2 = new City("Echohill", 13500, 5500, 1845);
const s1 = new Settlement("Purpleroad", 1200, 280);
