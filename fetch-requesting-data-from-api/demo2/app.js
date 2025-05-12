// console.log("Hello world!");

//todo I want to fetch some fox images and add them to my document
//step1 fetch images
//
async function getFoxImages() {
  const response = await fetch("https://randomfox.ca/floof");
  const data = await response.json();
  const wrangledData = data.image;
  return wrangledData;
  console.log(wrangledData);
}
getFoxImages();
//you can use the network tab to see if you are actually getting the data - see "fetch" somewhere on it
//return wrangledData means it will happen outside of this block scope?

//step2 create DOM elements to contain images
//use parameter here (foxSrc) as want to get any image
const foxesContainer = document.getElementById("foxes-container");
function createFoxImages(foxSrc) {
  const foxImg = document.createElement("img");
  //if I want to get pic 23, get pic 23
  foxImg.src = foxSrc;
  foxImg.alt = "A lovely picture of a fox happily enjoying nature";
  foxesContainer.appendChild(foxImg);
}
//last thing we need to do is put the get fox image function with the create fox images one
//want to put the two funciton stogether, one creates the img element and the other adds the src value
// technically we want this pseudocode: createFoxImages(await getFoxImages());
//make a third function that puts them together, reason being is need to await one of the funcitons
//calling the funcotin and using getFoxImages as the argument
getFoxImages(createFoxImages);

async function createFoxImageAndAddSrc() {
  const fetchedData = await getFoxImages();
  createFoxImages(fetchedData);
}

createFoxImageAndAddSrc();
//just borrowing the data from the API, dont need ot worry about encryption, raw data, obviously they can shut it down anytime, but it's mcu more efficient
