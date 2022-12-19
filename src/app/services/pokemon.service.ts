import { Injectable } from '@angular/core';
import { Pokemon } from '../typings/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  defaultImg = 'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=';

  pokemons: Pokemon[] = [
    {
      name: 'bulbizarre',
      picture: 'https://www.pokepedia.fr/images/thumb/e/ef/Bulbizarre-RFVF.png/250px-Bulbizarre-RFVF.png',
      sex: 'male',
      level: 1,
    },
    {
      name: 'herbizarre',
      sex: 'female',
      picture: 'https://www.pokepedia.fr/images/thumb/4/44/Herbizarre-RFVF.png/250px-Herbizarre-RFVF.png',
      level: 50,
    },
    {
      name: 'florizarre',
      sex: 'male',
      picture: 'https://www.pokepedia.fr/images/thumb/4/42/Florizarre-RFVF.png/250px-Florizarre-RFVF.png',
      level: 51,
    },
  ];

  constructor() { }

  addPokemon(pokemon: Pokemon) {
    this.pokemons.push(pokemon);
  }

  deletePokemon(index: number) {
    this.pokemons.splice(index, 1);
  }

  getPokemon(name: string) {
    return this.pokemons.find((pokemon) => {
      return pokemon.name === name;
    });
  }
}
