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

}

const pokemons = [];
const instancePokemons = [];

for (let i = 1; i < rowPokemonCSV.length; i++) {
  const arrPokemon = rowPokemonCSV[i].split(',');
  // [ '1', 'Bulbasaur', 'grass', 'starter' ]

  // >>>>>>>>>>>============ Code Here 2nd =============<<<<<<<<<<<<<<

}

// Driver Code

console.log(pokemons);
/*
[
  { id: 1, name: 'Bulbasaur', type: 'grass', rarity: 'starter' },
  { id: 2, name: 'Pikachu', type: 'lightning', rarity: 'starter' },
  { id: 3, name: 'Machop', type: 'fighting', rarity: 'normal' },
  { id: 4, name: 'Celeby', type: 'grass', rarity: 'mythic' },
  { id: 5, name: 'Charmander', type: 'fire', rarity: 'normal' }
]
*/

console.log(instancePokemons);
/*
[
  Pokemon {
    _id: 1,
    name: 'Bulbasaur',
    type: 'grass',
    _rarity: 'starter'
  },
  Pokemon {
    _id: 2,
    name: 'Pikachu',
    type: 'lightning',
    _rarity: 'starter'
  },
  Pokemon {
    _id: 3,
    name: 'Machop',
    type: 'fighting',
    _rarity: 'normal'
  },
  Pokemon { _id: 4, name: 'Celeby', type: 'grass', _rarity: 'mythic' },
  Pokemon {
    _id: 5,
    name: 'Charmander',
    type: 'fire',
    _rarity: 'normal'
  }
]
*/

if (instancePokemons[0] instanceof Pokemon) {
  instancePokemons[0].greet();
  // Nice to meet you, my name is Bulbasaur
}

fs.writeFileSync('./pokemon.json', JSON.stringify(instancePokemons, null, 2));

module.exports = Pokemon;