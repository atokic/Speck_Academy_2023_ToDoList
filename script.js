let input = document.getElementById("inputValue");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addButton").click();
  }
});

function createNewItem() {
    let listItem = document.createElement("li");
    let inputValue = document.getElementById("inputValue").value;
    let textValue = document.createTextNode(inputValue);
    
    listItem.appendChild(textValue);

    if (inputValue === '') {
        alert("Sorry, you didn't type any text!");
    } else {
      document.getElementById("cardsList").appendChild(listItem);
    }
    
    document.getElementById("inputValue").value = "";
  }

function clearAllItems() {
    let cardList = document.getElementsByTagName("ul");
    cardList[0].innerHTML = "";
}