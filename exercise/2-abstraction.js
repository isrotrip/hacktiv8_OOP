"use strict"

/*
  Using Pokemon from 1-intro.js (will not work anymore after 2-inheritance)

  We informed that class Pokemon have properties:
  -----------------------------------------------
  id: number (private)
  name: string (public)
  type: string (public)
  rarity: string (private)

  And instance method:
  --------------------
  greet - says it name

  Now create an instance of class Pokemon that have properties:
  id: 10
  name: 'mew'
  type: 'psychic'
  rarity: 'mythic'
*/

const Pokemon = require('./1-intro.js');

// >>>>>>>>>>>============ Code Here =============<<<<<<<<<<<<<<
const mew = new Pokemon(10, 'mew', 'psychic', 'mythic');

// Driver Code
console.log(mew);
// Pokemon { _id: 10, name: 'mew', type: 'psychic', _rarity: 'mythic' }
mew.greet();
// Nice to meet you, my name is mew

module.exports = mew;