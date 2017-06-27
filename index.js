function changeHeading(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const p = document.querySelector('#stats')
  p.innerHTML += name
}

function changeParagraph(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.colorName.value
  const p = document.querySelector('#stats')
  p.style.color = name
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', changeHeading)
const colorForm = document.querySelector('#color-form')
colorForm.addEventListener('submit', changeParagraph)