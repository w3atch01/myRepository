let toDoList = []
let inputVar = document.querySelector(".js-input")
let pVar = document.querySelector(".js-p")

if (localStorage.getItem('saved')) {
    toDoList = JSON.parse(localStorage.getItem('saved'))
    updateList()
}

function addToList() {
    if (!inputVar.value) {
        pVar.innerHTML = "Please Enter a Task."
    } else if (inputVar.value) {
        toDoList.push(inputVar.value)
        inputVar.value = ""
        pVar.innerHTML = ""
        localStorage.setItem('saved', JSON.stringify(toDoList))
        updateList()
    }
}

function updateList () {
    let i = 0
    let htmlList = ""

    while (i < toDoList.length) {
        htmlList = htmlList + `<div class="js-task-lines-div"><li>${toDoList[i]}</li> <button onclick="toDoList.splice(${i},1);updateList();saveToLocal()">
        Delete Task</button></div>`
        i = i + 1
    }
    document.querySelector(".js-div").innerHTML = htmlList
}

function keyDown() {
    if (event.key == "Enter") {
        addToList()
    }
}

function saveToLocal () {
    localStorage.setItem('saved', JSON.stringify(toDoList))
}

