import { getPokemon } from './pokemon.js';

const d = document;

d.addEventListener('submit', (e) => {
  e.preventDefault();
  getPokemon(d.getElementById('txtPokemon').value);
});

d.getElementById('DOMContentLoaded', (e) => {
  setTimeout(() => {
    d.querySelector('audio').play();
  }, 2000);
});
