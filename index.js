document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.addEventListener("submit", (e) =>{
    e.preventDefault();
    handleInput(e.target.inputArea.value);
    let form = document.querySelector("#formContainer")
    form.reset()
  })
})

function handleInput(shopList) {
  let p = document.createElement("p")
  p.style.fontSize = "20px";
  p.style.fontStyle = "italic";
  p.style.fontWeight = "bold";
  let checkBox = document.createElement("input");
  checkBox.type="checkbox";
  checkBox.id = "myCheckbox";
  checkBox.style.marginLeft = "200px";
  checkBox.style.cursor = "pointer"
  checkBox.addEventListener("change", chekMark)
  p.textContent = `${shopList}`
  p.appendChild(checkBox)
  document.querySelector("#shopingListArea").appendChild(p)
}

function chekMark(event) {
 console.log("", event.target.checked)
}