document.getElementById('main').remove()
const newHeader = document.createElement('h1')
document.querySelector('body').appendChild(newHeader)
newHeader.id = 'victory'
newHeader.textContent = 'Sunil is the champion'