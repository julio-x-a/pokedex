const d = document,
  $audio = d.querySelector('audio');

export async function getPokemon(idPokemon) {
  try {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}/`);
    d.querySelector('.figure').replaceWith(loader());
    if (!res.ok) throw { status: res.status, statusText: res.statusText };
    let pokemon = await res.json();
    createImg(pokemon);
    $audio.setAttribute('src', `./assets/${pokemon.name}.mp3`);
    $audio.play();
  } catch (err) {
    console.log(err.status, err.statusText);
  }
}

function createImg(pokemon) {
  let $img = d.createElement('img');
  let sprite = pokemon.sprites.other['official-artwork'].front_default;
  $img.setAttribute('src', sprite);
  $img.classList.add('animate__animated', 'animate__tada', 'figure');
  d.querySelector('.figure').replaceWith($img);
}

function loader() {
  const $loader = d.createElement('img');
  $loader.setAttribute('src', 'assets/ball-triangle.svg');
  $loader.classList.add('figure');
  return $loader;
}
