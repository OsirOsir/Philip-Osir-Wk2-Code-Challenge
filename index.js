document.addEventListener("DOMContentLoaded", () => {
  let currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long', // This logs the weekday in a lonng format
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // updates the content of the <p> tag with id="currentDate"
  let currentDateElement = document.querySelector("#currentDate");
  currentDateElement.textContent = `${currentDate}`;
  
  
  
  let taskForm = document.addEventListener("submit", (e) =>{
    e.preventDefault();
    handleInput(e.target.inputArea.value);
    let form = document.querySelector("#formContainer")
    form.reset()
  })
})

let clearButton = document.querySelector("#clearList");
clearButton.addEventListener("click", () => {
  let shoppingArea = document.querySelector("#shopingListArea");
  shoppingArea.innerHTML = "";
})

function handleInput(shopList) {
  let p = document.createElement("p")
  p.style.fontSize = "20px"; // styles the p tag
  p.style.fontStyle = "italic";
  p.style.fontWeight = "bold";
  p.style.fontFamily = "arial"
  let checkBox = document.createElement("input");  // targets the checkbx 
  checkBox.type="checkbox";
  checkBox.id = "myCheckbox";
  checkBox.style.marginLeft = "200px";
  checkBox.style.cursor = "pointer"
  checkBox.addEventListener("change", chekMark)
  p.textContent = `${shopList}`
  p.appendChild(checkBox)
  document.querySelector("#shopingListArea").appendChild(p)
}

function chekMark(event) {      // event function for the checkbox, to show checked 
 return("", event.target)

}