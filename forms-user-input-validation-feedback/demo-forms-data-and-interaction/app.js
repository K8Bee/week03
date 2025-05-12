console.log("Hello World!");

//todo i want to collect the data from the
//step 1: select the form from the DOM -- getElementById() pr querySelector()
// you don't neccessarily have to set a variable, but it makes the code easier to read, and  is mroe useful, as if you want to reuse the code, you don't have to rewrite it multiple times
//called variable mainForm, so you can see you can have it as anything you want it to be, doesn't need to be "form" as you may have more than one
const mainForm = document.getElementById("main-form");
console.dir(mainForm);

//step 2: set up an event, so when he user submits the form, I get the data, that's the event I need to set up
//two parts in an event:
//event handler: I get the Data
// so what el;ement am i interactin with to put the event listener?

function handleSubmit(event) {
  //I want to prevent the default behaviour (see comments at very bottom) of the submit event which appends the data as query string in my url
  event.preventDefault();
  // I am going to create a template object to store the data
  // a form is like an object, having key value pairs, the strucutre really matches JS objects
  //Then, I will add the data input values into the template object
  //this will be funky looking code, but these lines will always be the same
  // after = it means you're creating a new template box for our form data, based on the form on your webpage you have chosen, here "mainForm"
  const formData = new FormData(mainForm);
  console.log(formData);
  //you are getting the data FROM the entries, not checking the form entries below
  // the name of the input is the key property and the "answer" is the value, aking up a key value pair
  //note a date is stored as a string, in year, month, date format (you will need to look into how to reorganise that later with your data generated)
  const formValue = Object.fromEntries(forData);
  console.table(formValues);
  //you can delete the conosole.logs so don't leak data
  //(optional) you could once you collect the data from the form, you could reset the input value to be blank (?you can invoke the reset value)
  //?IN THE FUTURE YOU WILL Have a task here to send the data to the server, to be stored in a database
}
//event listener: when
// we want the whole form to be part of this event not jsut the button
// we need to things inside () the event and funciton (this is a special function, a callback function, because it's a funciton that is an argument of the function we're starting with)
mainForm.addEventListener("submit", handleSubmit);

// currently when Manny filled out the form and submitted, the data was all added to the end of the url (becomes a query string e.g. /?blahblahblah)
// the default is to make all our answers as a query string
//but we don't want that to happen (data would be exposed in the query string, e.g. what if you'd put in a password)
//this is what the "action" attribute does
