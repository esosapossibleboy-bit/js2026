// 1. Initialize five fortune variables with string values
let fortune1 = "Your cat will look very cuddly today.";
let fortune2 = "The weather will be nice tomorrow.";
let fortune3 = "Be cautious of your new neighbors.";
let fortune4 = "You will find a new hobby soon.";
let fortune5 = "It would be wise to avoid the color red today.";

// 2. Select a random number between 1 and 5 (inclusive)
let randomNumber = Math.floor(Math.random() * 5) + 1;
 
 // 3. Create a selectedFortune variable
 let selectedFortune;

 // Assign the appropriate fortune based on conditional rules
 if (randomNumber === 1) {
  selectedFortune = fortune1;
 } else if (randomNumber === 2) {
  selectedFortune = fortune2;
 } else if (randomNumber === 3) {
  selectedFortune = fortune3;
 } else if (randomNumber === 4) {
  selectedFortune = fortune4;
 } else if (randomNumber === 5) {
  selectedFortune = fortune5;
 }
 // 4. Log the selectedFortune to the console
 console.log(selectedFortune);