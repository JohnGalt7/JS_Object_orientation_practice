"use strict";

// Class syntax ES2015
// Not true class-based programming, just syntatic sugar to keep it simple and familiar for programmers coming from class-based languages
// objects and prototypes are still working in the background

// Defining classes

class GeneralStore {
  // can define properties here (this way since ES 2022)
  #name = "Sample Store";
  #logo = "🌄";
  #openSince = 2012;
  #workers = 30;

  // constructor(name, logo, openSince) {
  //   this.name = name;
  //   this.logo = logo;
  //   this.openSince = openSince;
  // }

  // Ternary operator ensures that a new value is only assigned to property if it is provided

  constructor(name, logo, openSince, workers) {
    this.#name = name ? name : this.#name;
    this.#logo = logo ? logo : this.#logo;
    this.#openSince = openSince ? openSince : this.#openSince;
    this.#workers = workers ? workers : this.#workers;
  }

  open() {
    console.log(`The ${this.#name} store is open now!`);
  }
  close() {
    console.log(`The ${this.#name} store is closed now!`);
  }
  //methods can be private too if we prefix with '#'

  // Defining getters and setters

  get name() {
    console.log(this.#name);
  }
  set name(newName) {
    console.log(`Name property set to ${newName}`);
    this.#name = newName;
  }

  get logo() {
    console.log(this.#logo);
  }
  set logo(newLogo) {
    console.log(`Logo is set to ${newLogo}`);
    this.#logo = newLogo;
  }

  get openSince() {
    console.log(this.#openSince);
  }
}
// only constructors and other object methods can access private methods

// Creating object instances

const generalStore1 = new GeneralStore("StoreIt", "🌎", 1990, 25);

// Deriving from "classes"

class Bakery extends GeneralStore {
  #masterBakers = 3;

  constructor(name, logo, openSince, workers, masterBakers) {
    // calling constructor of the "superclass" -- must happen before accessing 'this' in constructor
    super(name, logo, openSince, workers);
    this.#masterBakers = masterBakers ? masterBakers : this.#masterBakers;
  }

  // defining method of "subclass"

  buyBread(num) {
    console.log(`You bought ${num} bread.`);
  }

  // overwriting methods, calling a method of the superclass

  open(day) {
    if (day === "monday") {
      console.log(`We do not open our bakery at Monday, sorry.`);
    } else {
      super.open();
    }
  }
}

const bakery1 = new Bakery("Bun-ny", "🍞", 2001, 12, 6);

// if we omit the constructor function in a class
// the following 'default' constructor will be applied in the background:
// constructor(...args){
// super(...args);
// }
// this means that new, subclass-specific properties are not initialized
