"use strict";

/*
  Require module from 2-inheritance and modify 1-intro.js

  Make a new class Type and assign to Pokemon as a Composition Relation

  class type have properties:
  type: string(public)
  code: id + random integer(private)
*/

const { GrassPokemon } = require('./2-inheritance.js');

// Driver Code
const celebi = new GrassPokemon(4, 'celebi', 'mythic');
console.log(celebi);
/*
GrassPokemon {
  _id: 4,
  name: 'celebi',
  type: Type { type: 'grass', _code: 4.457910772500096 },
  _rarity: 'mythic'
}
*/