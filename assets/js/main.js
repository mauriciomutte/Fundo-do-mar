const body = document.querySelector('.body')
const separate = document.querySelectorAll('.separate')
const btnChangeColor = document.querySelector('.changeColor')
const btnChangeLanguage = document.querySelector('.changeLanguage')
const title = document.querySelector('.title')

console.log(title.value)

btnChangeColor.addEventListener('click', function() {
  btnChangeColor.classList.toggle('changeColor--blue')
  btnChangeLanguage.classList.toggle('changeLanguage--blue')
  body.classList.toggle('body--blue')
  for (var i = 0; i < 4; i++) {
    separate[i].classList.toggle('separate--white')
  }
  if (page === 1) {
    if (btnChangeColor.innerHTML === 'Azul/Branco') {
      btnChangeColor.innerHTML = 'Branco/Preto'
    } else {
      btnChangeColor.innerHTML = 'Azul/Branco'
    }
  }
})