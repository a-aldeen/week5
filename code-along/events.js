// Get a reference to the page title element from the DOM
let pageTitleElement = document.querySelector(`.page-title`)

// Modify the page title element's contents
pageTitleElement.innerHTML = `Movies to watch!`

// Get a reference to the bulleted list of movies
let movieList = document.querySelector(`.movies-to-watch`)

// Add an new list item to the bulleted list of movies
movieList.insertAdjacentHTML(`beforeend`, `
  <li>Spaceballs</li>
`)


// Get a referernce for the click me button
let clickMeButton = document.querySelector(`.click-me`)

// Event listener for the click me button
clickMeButton.addEventListener(`click`, async function() {
  alert(`the button was clicked`)
  let pageTitle = document.querySelector(`.page-title`)
  pageTitle.insertAdjacentHTML(`beforeend`, `No Titlesss`)
})

// Get a reference for the add movie link
let addMovieLink = document.querySelector(`.add-movie`)

//Build an event listener for teh add link
addMovieLink.addEventListener(`click`, async function () {

  // prevent the link default behavior
  event.preventDefault()

  // do a new thing - which is add a movie to the list
let moviesNames = document.querySelector(`.movies-to-watch`)
movieList.insertAdjacentHTML(`beforeend`, `
<li> New Movie Whatever</li>
`)
})

// Get a reference to the zoom image button
let zoomImageButton = document.querySelector(`.zoom-image`)

// Add event listener
zoomImageButton.addEventListener(`click`, async function() {

  // find the image
  let imageInPage = document.querySelector(`img`)

  // Add the `border-pink-500` class to the image element
  imageInPage.classList.add(`border-pink-500`)  

  // make the image larger
  imageInPage.classList.toggle(`w-96`)
  imageInPage.classList.toggle(`w-full`)
})

// Get a reference to the change image button
let changeImageButton = document.querySelector(`.change-image`)

// Add an event listener
changeImageButton.addEventListener(`click`, async function () {

  // find the image 
  let newImage = document.querySelector(`img`)

  //change the image source
  newImage.setAttribute(`src`, `../images/grogu2.jpg`)

})

// Get a reference fo teh say hi button
let sayHiButton = document.querySelector(`.say-hi`)

// Add event listener
sayHiButton.addEventListener(`click`, async function () {

  // prevent the default behavior
  event.preventDefault()

  // add action
  console.log(`The form was submitted`)

  // get a reference to the input field that holds the first name (id is done with # class is done with a dot)
  let nameInput = document.querySelector(`#first-name`)

  // get the value from teh input field
let firstName = nameInput.value

  // get the refernce to greet
  let Greet = document.querySelector(`.greet`)
  
  // first name should have value
  if (firstName.length>0) {
  // create a sentece to put in the greet element
  let sentence = `Hi, ${firstName}`

  // set teh greet element html to the sentence
  Greet.innerHTML = sentence
  }
  else {
  Greet.innerHTML = ``
  }
})