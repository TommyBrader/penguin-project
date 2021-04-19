// Selecting Relevant Penguins
const africaPenguins = document.querySelectorAll('.africa')
const antarcticaPenguins = document.querySelectorAll('.antarctica')
const australiaAndOceaniaPenguins = document.querySelectorAll('.australia-and-oceania')
const southAmericaPenguins = document.querySelectorAll('.south-america')
const antarcticaSouthAmericaPenguins = document.querySelectorAll('.antarctica-south-america')
const australiaAndOceaniaSouthAmericaPenguins = document.querySelectorAll('.australia-and-oceania-south-america')

// Number of Penguin Species per Continent
const africaPenguinsLength = parseInt(africaPenguins.length)
const antarcticaPenguinsLength = parseInt(antarcticaPenguins.length) + parseInt(antarcticaSouthAmericaPenguins.length)
const australiaAndOceaniaPenguinsLength = parseInt(australiaAndOceaniaPenguins.length) + parseInt(australiaAndOceaniaSouthAmericaPenguins.length)
const southAmericaPenguinsLength = parseInt(southAmericaPenguins.length) + parseInt(antarcticaSouthAmericaPenguins.length + parseInt(australiaAndOceaniaSouthAmericaPenguins.length))

// Displaying Total plus Hiding and Showing Relevent Penguins on Button Click
document.querySelector('#info-all').addEventListener('click', function(event) {
  event.preventDefault()
  console.log('Clicked: All')
  document.querySelector('#penguin-number').innerHTML = `Number of Penguin Species: 18`
  africaPenguins.forEach(element=> element.hidden = false)
  antarcticaPenguins.forEach(element=> element.hidden = false)
  australiaAndOceaniaPenguins.forEach(element=> element.hidden = false)
  southAmericaPenguins.forEach(element=> element.hidden = false)
  antarcticaSouthAmericaPenguins.forEach(element=> element.hidden = false)
  australiaAndOceaniaSouthAmericaPenguins.forEach(element=> element.hidden = false)
})

document.querySelector('#info-africa').addEventListener('click', function(event) {
  event.preventDefault()
  console.log('Clicked: Africa')
  document.querySelector('#penguin-number').innerHTML = `Number of Penguin Species Typically Found in Africa: ${africaPenguinsLength}`
  africaPenguins.forEach(element=> element.hidden = false)
  antarcticaPenguins.forEach(element=> element.hidden = true)
  australiaAndOceaniaPenguins.forEach(element=> element.hidden = true)
  southAmericaPenguins.forEach(element=> element.hidden = true)
  antarcticaSouthAmericaPenguins.forEach(element=> element.hidden = true)
  australiaAndOceaniaSouthAmericaPenguins.forEach(element=> element.hidden = true)
})

document.querySelector('#info-antarctica').addEventListener('click', function(event) {
  event.preventDefault()
  console.log('Clicked: Antarctica')
  document.querySelector('#penguin-number').innerHTML = `Number of Penguin Species Typically Found in Antarctica: ${antarcticaPenguinsLength}`
  africaPenguins.forEach(element=> element.hidden = true)
  antarcticaPenguins.forEach(element=> element.hidden = false)
  australiaAndOceaniaPenguins.forEach(element=> element.hidden = true)
  southAmericaPenguins.forEach(element=> element.hidden = true)
  antarcticaSouthAmericaPenguins.forEach(element=> element.hidden = false)
  australiaAndOceaniaSouthAmericaPenguins.forEach(element=> element.hidden = true)
})

document.querySelector('#info-australia-and-oceania').addEventListener('click', function(event) {
  event.preventDefault()
  console.log('Clicked: Australia and Oceania')
  document.querySelector('#penguin-number').innerHTML = `Number of Penguin Species Typically Found in Australia and Oceania: ${australiaAndOceaniaPenguinsLength}`
  africaPenguins.forEach(element=> element.hidden = true)
  antarcticaPenguins.forEach(element=> element.hidden = true)
  australiaAndOceaniaPenguins.forEach(element=> element.hidden = false)
  southAmericaPenguins.forEach(element=> element.hidden = true)
  antarcticaSouthAmericaPenguins.forEach(element=> element.hidden = true)
  australiaAndOceaniaSouthAmericaPenguins.forEach(element=> element.hidden = false)
})

document.querySelector('#info-south-america').addEventListener('click', function(event) {
  event.preventDefault()
  console.log('Clicked: South America')
  document.querySelector('#penguin-number').innerHTML = `Number of Penguin Species Typically Found in South America: ${southAmericaPenguinsLength}`
  africaPenguins.forEach(element=> element.hidden = true)
  antarcticaPenguins.forEach(element=> element.hidden = true)
  australiaAndOceaniaPenguins.forEach(element=> element.hidden = true)
  southAmericaPenguins.forEach(element=> element.hidden = false)
  antarcticaSouthAmericaPenguins.forEach(element=> element.hidden = false)
  australiaAndOceaniaSouthAmericaPenguins.forEach(element=> element.hidden = false)
})