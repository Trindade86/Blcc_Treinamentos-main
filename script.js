

/* efeito botao hambuguer*/

const menuItem = document.querySelectorAll('.item-menu');

function selectLink() {
  menuItem.forEach(item => item.classList.remove('ativo'));
  this.classList.add('ativo');
}

menuItem.forEach(item => item.addEventListener('click', selectLink));

const btnExp = document.querySelector('#btn-exp');
const menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', () => {
  menuSide.classList.toggle('expandir');
});


/*efeito menu-navegação */
window.addEventListener('scroll',  function(){
let menu = document.querySelector('.menu-lateral')
menu.classList.toggle('mn-nav', window.scrollY > 500)
})


/*efeito  do rodape*/

const sr = ScrollReveal({ reset: true });

const effects = [
  { selector: '.efeito1', rotate: { x: 0, y: 100, z: 5 }, duration: 3000 },
  { selector: '.efeito2', rotate: { x: 0, y: 80, z: 5 }, duration: 3000 },
  { selector: '.efeito3', rotate: { x: 0, y: 80, z: 5 }, duration: 3500 },
  { selector: '.icone1', rotate: { x: 10, y: 100, z: 0 }, duration: 3000 },
  { selector: '.icone2', rotate: { x: 20, y: 100, z: 0 }, duration: 3000 },
  { selector: '.icone3', rotate: { x: 30, y: 100, z: 0 }, duration: 3000 }
];

effects.forEach(effect => {
  sr.reveal(effect.selector, {
    rotate: effect.rotate,
    duration: effect.duration
  });
});


