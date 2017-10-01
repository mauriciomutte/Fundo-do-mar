const body = document.querySelector('.body')
const separate = document.querySelectorAll('.separate')
const btnChangeColor = document.querySelector('.changeColor')

btnChangeColor.addEventListener('click', function() {
  btnChangeColor.classList.toggle('changeColor--blue')
  body.classList.toggle('body--blue')
  for (var i = 0; i < 4; i++) {
    separate[i].classList.toggle('separate--white')
  }
  if (btnChangeColor.innerHTML === 'Azul/Branco') {
    btnChangeColor.innerHTML = 'Branco/Preto'
  } else {
    btnChangeColor.innerHTML = 'Azul/Branco'
  }
})