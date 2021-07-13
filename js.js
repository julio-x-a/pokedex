const d = document;
async function getPokemon(pokemonName) {
  try {
    let req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`);
    if (!req.ok) throw { status: req.status, statusText: req.statusText };
    let pokemon = await req.json();
    createImg(pokemon);
    console.log(pokemon);
  } catch (err) {
    console.log(err.status, err.statusText);
  }
}

d.addEventListener('click', (e) => {
  if (e.target.matches('#btnFindPokemon')) {
    getPokemon(d.getElementById('txtPokemon').value);
  }
});

function removeImg(node) {
  const $div = d.querySelector('.container');
  if ($div.querySelector('img')) $div.removeChild(node);
}

function createImg(pokemon) {
  let $img = d.createElement('img');
  let sprite = pokemon.sprites.other['official-artwork'].front_default;
  $img.setAttribute('src', sprite);
  $img.classList.add('animate__animated', 'animate__tada', 'sprite-pokemon');
  removeImg(d.querySelector('.sprite-pokemon'));
  d.querySelector('.container').append($img);
}

// Replace node if it exists, otherwise append
// function replaceOrAppend(node, parent) {
//   const $parent = d.querySelector(parent);
//   if ($parent.querySelector(node)) $parent.replaceChild(node, $parent.querySelector(node));
//   else $parent.appendChild(node);
