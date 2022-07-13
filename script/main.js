// get ui elements
const start = document.querySelector('.min'),
  end = document.querySelector('.max'),
  input = document.querySelector('#input'),
  btn = document.querySelector('#guess'),
  message = document.querySelector('.message')

// Game variables
let min = 1,
  max = 10,
  winnerNumber = createrandom(min, max),
  gussesNumber = 3

// Create random number
function createrandom(min = 1, max = 1) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}


