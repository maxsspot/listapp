var listContent = document.getElementById("listContent")
var numberOfItems = 1;
var resetConfirmDialog = document.getElementById("resetConfirmDialog")
var listName = document.getElementById("listName");

function addItem () {
    numberOfItems+=1
    
    newItem = document.createElement("input")
    newItem.className = "listItem"
    newItem.id = "item" + numberOfItems
    newItem.addEventListener("blur",shouldYouRemove)
    newItem.style.borderTop = "black solid 1px"

    checkItemIcon = document.createElement("i")
    checkItemIcon.className = "fa-solid fa-check"

    checkItem = document.createElement("button")
    checkItem.className = "itemControl"
    checkItem.id = "checkItem" + numberOfItems
    checkItem.appendChild(checkItemIcon)
    checkItem.onclick = checkItemF
    checkItem.style.borderTop = "black solid 1px"

    listContent.appendChild(newItem)
    listContent.appendChild(checkItem)
}

function confirmReset() {
    resetConfirmDialog.style.opacity = "1";  resetConfirmDialog.style.top = "10px";  resetConfirmDialog.style.pointerEvents = "all"
}

function closeReset() {
    resetConfirmDialog.style.opacity = "0";  resetConfirmDialog.style.top = "00px";  resetConfirmDialog.style.pointerEvents = "none"
}

function resetList() {
    numberOfItems=0
    listContent.innerHTML=""
    listName.value="New List"
    addItem()
    closeReset()
}

function checkItemF(event) {
    checkItemNumber = event.currentTarget.id.match(/\d+$/)[0]
    itemToCheck = document.getElementById("item" + checkItemNumber)
    if (itemToCheck.style.textDecoration != "line-through") {
        itemToCheck.style.textDecoration = "line-through"
    } else {
        itemToCheck.style.textDecoration = "none"
    }
}

function shouldYouRemove(event) {
    checkItemNumber = event.currentTarget.id.match(/\d+$/)[0]
    itemToRemove = document.getElementById("item" + checkItemNumber)
    buttonToRemove = document.getElementById("checkItem" + checkItemNumber)

    if (itemToRemove.value === "" && checkItemNumber != 1) {
        listContent.removeChild(itemToRemove)
        listContent.removeChild(buttonToRemove)
        numberOfItems-=1
    }
}
