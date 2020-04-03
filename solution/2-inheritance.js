"use strict";

/*
  Using Pokemon from 1-intro.js (gonna change in future release)

  We now want to make a new class by it's pokemonType, which are:

  1. GrassPokemon
  ---------------
  id: number (private)
  name: string (public)
  type: 'grass' (public)
  rarity: string (private)
  greet()
  hidingInGrass() // 'Kekeke, you cannot find me!'

  2. FightingPokemon
  id: number (private)
  name: string (public)
  type: 'fighting' (public)
  rarity: string (private)
  greet()
  punchYou() // 'Got you!'

  3. LightningPokemon
  id: number (private)
  name: string (public)
  type: 'lightning' (public)
  power: string rarity (private)
  greet()

  4. FirePokemon
  id: number (private)
  name: string (public)
  type: 'lightning' (public)
  rarity: string (private)
  greet()
  listen() // 'I love 3000'
*/

const Pokemon = require('./1-intro.js');

class PokemonWithRarity extends Pokemon {
  constructor(id, name, type, rarity) {
    super(id, name, type);
    this._rarity = rarity;
  }

  get rarity() {
    return this._rarity;
  }

  set rarity(newRarity) {
    this._rarity = newRarity;
  }

  static create(id, name, rarity) {
    return new this(id, name, rarity);
  }

  static bulkCreate(arrayObjPokemon) {
    const pokemons = [];

    for (let i = 0; i < arrayObjPokemon.length; i++) {
      let { _id, name, _rarity } = arrayObjPokemon[i]

      pokemons.push(this.create(_id, name, _rarity))
    }

    return pokemons;
  }
}

class GrassPokemon extends PokemonWithRarity {
  constructor(id, name, rarity) {
    super(id, name, 'grass', rarity);
  }

  hidingInGrass() {
    console.log('Kekeke, you cannot find me!');
  }
}

class FightingPokemon extends PokemonWithRarity {
  constructor(id, name, rarity) {
    super(id, name, 'grass', rarity);
  }

  punchYou() {
    console.log('Got you!');
  }
}

class LightningPokemon extends Pokemon {
  constructor(id, name, rarity) {
    super(id, name, 'lightning');
    this._power = rarity;
  }

  get power() {
    return this._power;
  }

  set power(newPower) {
    this._power = newPower;
  }

  greet() {
    console.log('100 thousand megaVolt');
  }

  static create(id, name, rarity) {
    return new this(id, name, rarity);
  }

  static bulkCreate(arrayObjPokemon) {
    const pokemons = [];

    for (let i = 0; i < arrayObjPokemon.length; i++) {
      let { _id, name, _rarity } = arrayObjPokemon[i]

      pokemons.push(this.create(_id, name, _rarity))
    }

    return pokemons;
  }
}

class FirePokemon extends PokemonWithRarity {
  constructor(id, name, rarity) {
    super(id, name, 'fire', rarity);
  }

  listen() {
    console.log('I love 3000');
  }
}

const bulbasaur = new GrassPokemon(1, 'bulbasaur', 'starter');
const machop = new FightingPokemon(3, 'machop', 'starter');
const pikachu = new LightningPokemon(2, 'pikachu', 'starter');
const app = new FirePokemon(5, 'app', 'express');

// // Driver Code

// console.log(bulbasaur);
// bulbasaur.hidingInGrass();
// /*
// GrassPokemon {
//   _id: 1,
//   name: 'bulbasaur',
//   type: 'grass',
//   _rarity: 'starter'
// }
// Kekeke, you cannot find me!
// */

// console.log(machop);
// machop.punchYou();
// /*
// FightingPokemon {
//   _id: 3,
//   name: 'machop',
//   type: 'fighting',
//   _rarity: 'starter'
// }
// Got you!
// */

// console.log(pikachu);
// console.log(pikachu.power);
// /*
// LightningPokemon {
//   _id: 2,
//   name: 'pikachu',
//   type: 'lightning',
//   _power: 'starter'
// }
// starter
// */

// console.log(app);
// app.listen();
// /*
// FirePokemon { _id: 5, name: 'app', type: 'fire', _rarity: 'express' }
// I love 3000
// */

module.exports = {
  Pokemon,
  GrassPokemon,
  FightingPokemon,
  LightningPokemon,
  FirePokemon,
  pikachu,
  bulbasaur
}