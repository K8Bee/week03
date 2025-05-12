// console.log("Hello world!");

async function getJsonApiData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}
getJsonApiData();

async function getMyRepo() {
  const response = await fetch("https://api.github.com/repos/K8Bee/week01");

getmyRepo();
