// ID Card Generator
document.querySelector('#id-fav-number').min = 1

const submitForm = document.querySelector('#id-maker form')
submitForm.addEventListener('submit', function(event) {
  event.preventDefault()
  const name = document.querySelector('#id-maker input[name = "name"]').value
  const favNum = document.querySelector('#id-maker input[name = "favourite-number"]').value
  const nationality = document.querySelector('#id-maker input[name = "nationality"]').value
  const favPenguin = document.querySelector('#id-maker select[name = "favourite-penguin"]').value
  console.log('Name:', name)
  console.log('Favourite Number:', favNum)
  console.log('Nationality:', nationality)
  console.log('Favourite Penguin:', favPenguin)
  if ((name === '') || (favNum === '') || (nationality === '') || (favPenguin === '')) {
    alert('Please Complete All of the Form to get your Penguin ID')
  }
  else {
    document.querySelector('#your-id-card').innerHTML = `
    <figure class="id-cards">
    <figcaption class="id-title">Penguin ID</figcaption>
    <img
      src="./images/info-${favPenguin}.jpeg"
      alt="${favPenguin}"
      class="id-image"
    />
    <figcaption>
      <b class="categories">ID N<span>&#176;</span>: </b>#${favNum}
    </figcaption>
    <figcaption>
      <b class="categories">Name: </b>${name.charAt(0).toUpperCase() + name.slice(1)}
    </figcaption>
    <figcaption>
      <b class="categories">Title: </b>Penguin Enthusiast
    </figcaption>
    <figcaption>
      <b class="categories">Nationality: </b>${nationality.charAt(0).toUpperCase() + nationality.slice(1)}
    </figcaption>
    <figcaption>
      <b class="categories">Favourite Penguin: </b>${favPenguin.charAt(0).toUpperCase() + favPenguin.slice(1)}
    </figcaption>
    </figure>`
  }
})