// const d = document;
// async function getPokemon(pokemonName) {
//   try {
//     let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
//     if (!req.ok) throw { status: req.status, statusText: req.statusText };
//     let pokemon = await req.json();
//     let $img = d.createElement('img');
//     let sprite = pokemon.sprites.other['official-artwork'].front_default;
//     $img.setAttribute('src', sprite);
//     $img.classList.add('animate__animated', 'animate__bounceIn', 'sprite-pokemon');
//     removeImg(d.querySelector('.sprite-pokemon'));
//     d.querySelector('.container').append($img);
//     console.log(pokemon);
//   } catch (err) {
//     console.log(err.status, err.statusText);
//   }
// }

// d.addEventListener('click', (e) => {
//   if (e.target.matches('#btnFindPokemon')) {
//     getPokemon(d.getElementById('txtPokemon').value);
//   }
// });

// function removeImg(node) {
//   const $div = d.querySelector('.container');
//   if ($div.querySelector('img')) $div.removeChild(node);
// }

//Get pokemon information from API
