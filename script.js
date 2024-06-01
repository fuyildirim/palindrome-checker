const textInput = document.querySelector('#text-input')
const checkButton = document.querySelector('#check-btn')
const resultDiv = document.querySelector('#result')
const pElement = document.createElement("p");

function checkIfEmpty() {
  if (!textInput.value) {
    return alert("Please input a value")
  } 
}

function filterLetters(letter) {
  const symbolsAllowed = "ABCDEFGHIJKLMNOPQRSTUVWabcdefghijklmnopqrstuvwxyz0123456789";
  return symbolsAllowed.includes(letter)
}


function checkPalindrome() {
  checkIfEmpty()
  const input = textInput.value;
  console.log("Checking word: " + input);

  let inputFormatted = [...input.toLowerCase()];
  inputFormatted = inputFormatted.filter(word => filterLetters(word))
  console.log("Removing space and special symbols: " + inputFormatted);

  if (inputFormatted.join("") === inputFormatted.reverse().join("")) {
    pElement.textContent = `${input} is a palindrome`
  } else {
    pElement.textContent = `${input} is not a palindrome`
  }
  resultDiv.appendChild(pElement)
  console.log(pElement)




}


checkButton.addEventListener('click', checkPalindrome);
