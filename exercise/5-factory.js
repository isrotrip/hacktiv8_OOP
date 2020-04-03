"use strict";

/*
  Use module from 2-inheritance

  If we look the 4-classAndInstance it only handle single class.
  
  To make the code more clear we can combine it with Factory Method.
  
  Read data from json. and change all the data into instance.
*/

const fs = require('fs');
const {
  GrassPokemon,
  FirePokemon,
  LightningPokemon,
  FightingPokemon
} = require('./2-inheritance.js');

const stringJSON = fs.readFileSync('./pokemon.json', { encoding: 'utf-8' });
const parseJSON = JSON.parse(stringJSON);
/*
[
  { _id: 1, name: 'Bulbasaur', type: 'grass', _rarity: 'starter' },
  { _id: 2, name: 'Pikachu', type: 'lightning', _rarity: 'starter' },
  { _id: 3, name: 'Machop', type: 'fighting', _rarity: 'normal' },
  { _id: 4, name: 'Celeby', type: 'grass', _rarity: 'mythic' },
  { _id: 5, name: 'Charmander', type: 'fire', _rarity: 'normal' }
]
*/

class PokemonFactory {
}

const bulbasaur = PokemonFactory.makeInstance(parseJSON[0]);
const pokemons = PokemonFactory.makeBulkInstance(parseJSON);

// Driver Code
console.log(bulbasaur);
/*
GrassPokemon {
  _id: 1,
  name: 'Bulbasaur',
  type: Type { type: 'grass', _code: 1.393060793104357 },
  _rarity: 'grass'
}
*/

console.log(pokemons);
/*
[
  GrassPokemon {
    _id: 1,
    name: 'Bulbasaur',
    type: Type { type: 'grass', _code: 1.1844001765838628 },
    _rarity: 'grass'
  },
  LightningPokemon {
    _id: 2,
    name: 'Pikachu',
    type: Type { type: 'lightning', _code: 2.4861515501169453 },
    _power: 'lightning'
  },
  FightingPokemon {
    _id: 3,
    name: 'Machop',
    type: Type { type: 'fighting', _code: 3.622348403592043 },
    _rarity: 'fighting'
  },
  GrassPokemon {
    _id: 4,
    name: 'Celeby',
    type: Type { type: 'grass', _code: 4.094640610325714 },
    _rarity: 'grass'
  },
  FirePokemon {
    _id: 5,
    name: 'Charmander',
    type: Type { type: 'fire', _code: 5.012260856244444 },
    _rarity: 'fire'
  }
]
*/
