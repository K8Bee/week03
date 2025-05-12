// randomfox.ca is the API
//go to where it says the API is available here
//brings up code, looks like JS object, but it's actually JSON, know because value names are strings

// another API can use: jsonplaceholder.typicode.com/todsos
//this brings up an array of objects (a very common way of storing data)
//each of it's items are objects of data for to do lists

//you can borrow data from any API that's what they're there for

//todo I want to fetch the data from the randomfox API
//need to know the location of the data, here is https://randomfox.ca/floof
//and need to know the structure of the data, here it's JSON (objects specifically)

//step 1 establish a communication channel between our app and the API
//need a function:
// function fetchFoxes() {
//the fetch method comes with JS and can use it to connect to API
//we use the fetch() method to set up a connection between our app and an API (for example, external API or our own server API)
//what do we need with fetch, for now the location
// fetch("https://randomfox.ca/floof");
// store in a variable and console log it to help read/ use/ check
//   const response = fetch("https://randomfox.ca/floof");
//   console.log(response);
// }

// fetchFoxes();

//when we "fetch" this data, we don't know where physically the API is and so how long in secs it will take
//when console says "pending" that's all we can get for now
//when we're trying to run code that doesnt depend on us, but relies on external servers, it goes in a microtask queue, when your usually stack is finished, the microtask queue will then
//it's called being given a "promise" the browser or node environment in their eyes think your task is done, but we don't want that, we need to use two new key words, "await" and async
//async and await makes sure you get a reponse with our datd instead of a Promise
//so now:
// async function fetchFoxes() {
//   const response = await fetch("https://randomfox.ca/floof");
//   console.log(response);
// }

// fetchFoxes();
//instead of putting in microtask queue, it puts in task, it's no immediate, it's however long it takes for the stack to finish, but you will get a response this time
// we are getting the response that we want but not in the right format, what we say was the response object with all the values and properties (not the raw data)
//the next step is to parse (translate) the response into JSON
//you'll see you need to put "await" in again at every step you need to wait for (async is okay as it's applying to whole thing)
// async function fetchFoxes() {
//   const response = await fetch("https://randomfox.ca/floof");
//   console.log(response);
//   const data = await response.json();
//   console.log(data);

// }

// fetchFoxes();

//now have image source, and link,
//you might want to wrangle the data, meaning filter the data to the data we actually need (you have to borrow everything from the API but then you can decide which parts you care about and want)
async function fetchFoxes() {
  const response = await fetch("https://randomfox.ca/floof");
  //   console.log(response);
  const data = await response.json();
  //   console.log(data);
  //wrangle data: to acces the image property in the data
  const wrangledImage = data.image;
  console.log(wrangledImage);
}

fetchFoxes();
//now just get the image in the console log
//you don't have to "await" for data.image, as it's just a property, just filtering the data through dot notation not through a method, like with fetch and json which are methods
//async and await mean that the block is in a separate queue (async) so other work can be done while waiting
