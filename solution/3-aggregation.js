"use strict";

/*
  Using pikachu and bulbasaur from 2-inheritance

  Make a new class Forest and add Pokemon into Forest as a Aggregation Relation

  class type have properties:
  location: string (public)
  pokemons: array (private)
  addPokemon(pokemon)
*/

const { bulbasaur, pikachu } = require('./2-inheritance.js');

class Forest {
  // >>>>>>>>>>>============ Code Here =============<<<<<<<<<<<<<<
  constructor(location) {
    this.location = location;
    this._pokemons = [];
  }

  addPokemon(pokemon) {
    this._pokemons.push(pokemon);
  }
}

const kantoForest = new Forest('kanto')

kantoForest.addPokemon(bulbasaur);
kantoForest.addPokemon(pikachu);

// Driver code
console.log(kantoForest);
/*
Forest {
  location: 'kanto',
  pokemons: [
    GrassPokemon {
      _id: 1,
      name: 'bulbasaur',
      type: [Type],
      _rarity: 'starter'
    },
    LightningPokemon {
      _id: 2,
      name: 'pikachu',
      type: [Type],
      _power: 'starter'
    }
  ]
}
*/