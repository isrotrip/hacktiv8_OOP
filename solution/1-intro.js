"use strict";

/*
  Let's make simply object literal of a Pokemon
  There's pokemon.csv let's convert it into the csv
  Don't forget to save it as a pokemon.json file as well

  Pokemon have some properties which are:
    id: number (private)
    name: string (public)
    type: string (public)
    rarity: string (private)

  And add some instance method to say it's name
*/

const fs = require('fs');
const pokemonCSV = fs.readFileSync('./pokemon.csv', { encoding: 'utf-8' });
const rowPokemonCSV = pokemonCSV.split('\n');
/* 
[
  'id,name,type,rarity',
  '1,Bulbasaur,grass,starter',
  '2,Pikachu,lightning,starter',
  '3,Machop,fighting,normal',
  '4,Celeby,grass,mythic',
  '5,Charmander,fire,normal'
]
*/

class Pokemon {
  // >>>>>>>>>>>============ Code Here 1st =============<<<<<<<<<<<<<<
  constructor(id, name, type) {
    this._id = id;
    this.name = name;
    this.type = new Type(this._id, type);
  }

  get id() {
    return this._id;
  }

  set id(newId) {
    this._id = newId;
  }

  greet() {
    console.log(`Nice to meet you, my name is ${this.name}`)
  }
  
  static create(id, name, type) {
    return new this(id, name, type);
  }

  static bulkCreate(arrayObjPokemon) {
    const pokemons = [];

    for (let i = 0; i < arrayObjPokemon.length; i++) {
      let { _id, name, type } = arrayObjPokemon[i]

      pokemons.push(this.create(_id, name, type))
    }

    return pokemons;
  }
}

class Type {
  constructor(id, type) {
    this.type = type;
    this._code = this.generateCode(id);
  }

  generateCode(id) {
    return id + Math.random();
  }
}

const pokemons = [];
const instancePokemons = [];

for (let i = 1; i < rowPokemonCSV.length; i++) {
  const arrPokemon = rowPokemonCSV[i].split(',');
  // [ '1', 'Bulbasaur', 'grass', 'starter' ]

  // >>>>>>>>>>>============ Code Here 2nd =============<<<<<<<<<<<<<<
  let [ id, name, type, rarity ] = arrPokemon;
  id = Number(id);
  
  pokemons.push({
    id,
    name,
    type,
    rarity
  })

  instancePokemons.push(new Pokemon(id, name, type, rarity));
}

// // Driver Code

// console.log(pokemons);
// /*
// [
//   { id: 1, name: 'Bulbasaur', type: 'grass', rarity: 'starter' },
//   { id: 2, name: 'Pikachu', type: 'lightning', rarity: 'starter' },
//   { id: 3, name: 'Machop', type: 'fighting', rarity: 'normal' },
//   { id: 4, name: 'Celeby', type: 'grass', rarity: 'mythic' },
//   { id: 5, name: 'Charmander', type: 'fire', rarity: 'normal' }
// ]
// */

// console.log(instancePokemons);
// /*
// [
//   Pokemon {
//     _id: 1,
//     name: 'Bulbasaur',
//     type: 'grass',
//     _rarity: 'starter'
//   },
//   Pokemon {
//     _id: 2,
//     name: 'Pikachu',
//     type: 'lightning',
//     _rarity: 'starter'
//   },
//   Pokemon {
//     _id: 3,
//     name: 'Machop',
//     type: 'fighting',
//     _rarity: 'normal'
//   },
//   Pokemon { _id: 4, name: 'Celeby', type: 'grass', _rarity: 'mythic' },
//   Pokemon {
//     _id: 5,
//     name: 'Charmander',
//     type: 'fire',
//     _rarity: 'normal'
//   }
// ]
// */

// if (instancePokemons[0] instanceof Pokemon) {
//   instancePokemons[0].greet();
//   // Nice to meet you, my name is Bulbasaur
// }

// fs.writeFileSync('./pokemon.json', JSON.stringify(instancePokemons, null, 2));

module.exports = Pokemon;