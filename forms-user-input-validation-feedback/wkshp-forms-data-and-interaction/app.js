const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  console.table(formData);
});

const jsObjectPlease = Object.fromEntries(formData);
console.log(jsObjectPlease);
