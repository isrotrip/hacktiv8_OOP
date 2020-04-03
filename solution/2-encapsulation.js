"use strict";

/*
  Modify the 1-intro
  Using mew from 2-abstraction.js (will not work anymore after 2-inheritance)

  We informed that mew is instance of class Pokemon that have properties:
  id: 10
  name: 'mew'
  type: 'psychic'
  rarity: 'mythic'

  now we gonna change all properties to:
  id: 11
  name: 'rattata'
  type: 'normal'
  rarity: 'normal'
*/

const mew = require('./2-abstraction.js');
// Pokemon { _id: 10, name: 'mew', type: 'psychic', _rarity: 'mythic' }

// >>>>>>>>>>>============ Code Here =============<<<<<<<<<<<<<<

mew.id = 11;
mew.name = 'rattata';
mew.type = 'normal';
mew.rarity = 'normal';

// Driver Code
console.log(mew);
// Pokemon { _id: 11, name: 'rattata', type: 'normal', _rarity: 'normal' }
console.log(mew.id); // 11
console.log(mew.name); // rattata
console.log(mew.type); // normal
console.log(mew.rarity); // normal