/*
  Modify all pokemon in 1-intro and 2-inheritance (if needed)
  which are the add static method / class method create and bulkCreate 
  
  create require parameter that needed in its constructors,
  while bulkCreate require array of parameter that needed in its constructors
*/

const { GrassPokemon } = require('./2-inheritance');

const bulbasaur = GrassPokemon.create(1, 'bulbasaur', 'starter');
const pokemons = GrassPokemon.bulkCreate([
  { _id: 1, name: 'bulbasaur', type: 'grass', rarity: 'starter' },
  { _id: 2, name: 'celebi', type: 'grass', rarity: 'mythic' }
]);

// Driver Code
console.log(bulbasaur);
/*
GrassPokemon {
  _id: 1,
  name: 'bulbasaur',
  type: Type { type: 'grass', _code: 1.9807057502957024 },
  _rarity: 'starter'
}
*/
console.log(pokemons);
/*
[
  GrassPokemon {
    _id: 1,
    name: 'bulbasaur',
    type: Type { type: 'grass', _code: 1.9402168511960944 },
    _rarity: 'starter'
  },
  GrassPokemon {
    _id: 2,
    name: 'pikachu',
    type: Type { type: 'lightning', _code: 2.33121457417635 },
    _rarity: 'starter'
  }
]
*/