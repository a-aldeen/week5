// Usage: getRandomInt(6)
// Outputs a random number between 1 and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) + 1
}

// Goal: Roll the dice, and keep a running log of roll history by player

// RECIPE (algorithm) – do not modify the HTML!

// Store a reference to the roll button in memory
let rollButton = document.querySelector(`#roll-button`)
// Listen for the clicking of the roll button, when clicked:
rollButton.addEventListener(`click`, async function () {

// - Ignore the roll button's default behavior
event.preventDefault()

  
  // - Store a random integer in memory, representing the roll of the first die
  randomInteger1 = getRandomInt(6)
  
  // - Store a random integer in memory, representing the roll of the second die
  randomInteger2 = getRandomInt(6)
console.log(`The second random is ${randomInteger2}`)
  // - Store the total of the two random numbers, representing the total roll
  total = randomInteger1 + randomInteger2

  // - Replace the first die image using the first random value (hint: setAttribute)
  let firstImage = document.querySelector(`.die1`)
  firstImage.setAttribute(`src`, `../images/dice/${randomInteger1}.png`)

  // - Replace the second die image using the second random value (hint: setAttribute)
  let secondImage = document.querySelector(`.die2`) 
  secondImage.setAttribute(`src`, `../images/dice/${randomInteger2}.png`)

  // - Store a reference to the player name input element
  let nameInput = document.querySelector(`#player`)
  
  // - Grab the value of the player name element and store the player's name in memory
  let playerNmae = nameInput.value 

  // - Make sure the player's name is filled out; if it is:
  if (playerNmae.length>0) {

    // - Form a sentence in memory, containing the player's name and the total that was rolled
    let sentence = (`The first name is ${playerNmae} and his total is ${total}`)

    // - Store a reference to the "result" un-ordered list element
    let playerResult = document.querySelector(`.result`)

    // - Insert the sentence to the "result" un-ordered list as a list item (li)
    playerResult.innerHTML = sentence
  }
})
