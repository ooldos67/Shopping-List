const form = document.querySelector("form");
const inputItems = document.getElementById("items");
const inputAmount = document.getElementById("amount");
const listContainer = document.getElementById("list-container");

form.addEventListener("submit", addItem);

function addItem(event) {
    event.preventDefault();

    if(inputItems.value === "" || inputAmount.value === ""){
        alert("Please add a grocery AND an amount!")
    } else {
    let list = document.querySelector("ul");

    let grocery = document.createElement("li");
    grocery.innerHTML = '<p class="grocery">' + inputItems.value + '</p>'
    list.appendChild(grocery);

    let amount = document.createElement("p"); 
    amount.innerHTML = inputAmount.value;
    amount.classList.add("amount");
    grocery.append(amount)

    let deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = '<img class="delete" src="./images/delete.png" alt="delete button">';
    grocery.appendChild(deleteBtn);
    }

    inputItems.value = "";
    inputAmount.value = ""; 

    document.querySelector("h3").style.display = "none";
    
    saveData();
}

listContainer.addEventListener("click", (event) => {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("ticked");
        saveData();
    } else if(event.target.tagName === "P"){
        event.target.parentElement.classList.toggle("ticked");
        saveData();
    } else if(event.target.tagName === "IMG"){
        event.target.parentElement.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

function listMessage(event) {
    event.preventDefault();

    if(listContainer.innerHTML !== "") {
        document.querySelector("h3").style.display = "none";
    } else {
        document.querySelector("h3").style.display = "block";
    }
}

showTask();
