"use strict";

// 1. Constructor fn

function Aircraft(name, engineType, engineNum) {
  this.name = name;
  this.engineType = engineType;
  this.engineNum = engineNum;
}

// 2. Declare methods on prototype (optional)

Aircraft.prototype.fly = function (miles) {
  console.log(`The ${this.name} flew ${miles} miles and landed safely.`);
};

const plane1 = new Aircraft("Boeing-747-8", "Turbofan", 4);
const plane2 = new Aircraft("Cessna-172", "Piston", 1);

// 3. Create constructor for "subclass"

function Fighter(name, engineType, engineNum, missile, gun, isSupersonic = false) {
  Aircraft.call(this, name, engineType, engineNum);
  this.missile = missile;
  this.gun = gun;
  this.isSupersonic = isSupersonic;
}

// 4. Link "subclass" constructor's prototype to "superclass" constructor fn --- INHERITANCE

Fighter.prototype = new Aircraft();

// 5.  Create correct prototype object for "subclass" constructor --- ABILITY TO CREATE "SUBCLASS"

Fighter.prototype.constructor = Fighter;

// 6. Declare unique methods on "subclass's" prototype

Fighter.prototype.shootMissile = function () {
  console.log(`Target locked. One ${this.missile} launched.`);
};
Fighter.prototype.shootGun = function () {
  console.log(`Mounted gun was fired.`);
};

// Method where we call the method of the "superclass"

Fighter.prototype.flySupersonic = function (miles) {
  if (this.isSupersonic) {
    console.log(
      `The ${this.name} flew ${miles} miles. The supersonic leg of the flight was ${(miles * 4) / 5} miles long.`
    );
  } else {
    Aircraft.prototype.fly.call(this, miles);
  }
};

// const fighter1 = new Fighter("F-16", "Afterburning turbofan", 1, "AIM-7", "M61 A1 Vulcan", true);

// "subclass" of fighter

function CasFighter(name, engineType, engineNum, missile, gun, armor) {
  Fighter.call(this, name, engineType, engineNum, missile, gun);
  this.armor = armor;
}

// const casFighter1 = new CasFighter('A-10', 'Turbofan', 2, 'AGM-65', '30mm GAU-8/A', 'titanium bathtub')

CasFighter.prototype = new Fighter();
CasFighter.prototype.constructor = CasFighter;

CasFighter.prototype.closeAirSupport = function () {
  console.log(`The ${this.name} is on the way to provide close air support.`);
};
