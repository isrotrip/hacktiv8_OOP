"use strict";

/*
  Using pikachu and bulbasaur 2-inheritance

  We gonna override greet method in LightningPokemon
  Change into saying that:
  '100 thousand megaVolt'.
*/

const { pikachu, bulbasaur } = require('./2-inheritance.js');

// Driver Code
pikachu.greet();
// 100 thousand megaVolt
bulbasaur.greet();
// Nice to meet you, my name is bulbasaur