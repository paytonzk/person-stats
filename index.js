function handleSubmit(ev) {
  ev.preventDefault()
  const f = ev.target
  const name = f.personName.value
  const age = f.personAge.value
  const color = f.favoriteColor.value

  const div = document.querySelector('#stats')
  
  const list = document.createElement('ul')

  renderList(list, name, age, color)

  div.appendChild(list)
}

function renderList(list, name, age, color){
  const nameItem = document.createElement('li')
  renderListItem(nameItem, 'Name: ', name)
  list.appendChild(nameItem)

  const ageItem = document.createElement('li')
  renderListItem(ageItem, 'Age: ', age)
  list.appendChild(ageItem)

  const colorItem = document.createElement('li')
  renderListItem(colorItem, 'Favorite Color: ', color)
  colorItem.appendChild(renderColor(color))
  list.appendChild(colorItem)
}

function renderListItem(item, title, element){
  item.textContent = `${title} ${element}`
  return item
}

function renderColor(color){
  const colorDiv = document.createElement('div')
  colorDiv.style.backgroundColor = color
  colorDiv.style.width = '6rem'
  colorDiv.style.height = '3rem'
  return colorDiv
}

const personForm = document.querySelector('#person-form')
personForm.addEventListener('submit', handleSubmit)