// console.dir(document)
// console.log(document.title)
// console.log(document.doctype)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[9])
// document.all[9].textContent= "Nazith"


// console.log(document)

// console.log(document.getElementById("header-title"))
// var header = document.getElementById("header-title")

// header.textContent = "Nazith"

var listItems = document.getElementById("items")

// console.log(listItems.parentElement.parentElement)


// console.log(listItems.previousElementSibling)
// console.log(listItems.childNodes)

// console.log(listItems.children)

// listItems.children[2].style.backgroundColor = "blue"

// console.log(listItems.lastChild)

// console.log(listItems.lastElementChild)

// listItems.lastElementChild.textContent = "Partha"
// listItems.firstElementChild.textContent = "Nazith"

var newDiv = document.createElement("div")

newDiv.textContent = "Sanjith"

// newDiv.setAttribute("id", "sabari")

newDiv.id = "sabari"

newDiv.className = "Ganesh"

var container = document.querySelector(".container")
var header = document.querySelector("#header-title")
container.insertBefore(newDiv, header )

console.log(newDiv)
