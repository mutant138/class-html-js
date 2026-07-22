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

// var listItems = document.getElementById("items")

// console.log(listItems.parentElement.parentElement)


// console.log(listItems.previousElementSibling)
// console.log(listItems.childNodes)

// console.log(listItems.children)

// listItems.children[2].style.backgroundColor = "blue"

// console.log(listItems.lastChild)

// console.log(listItems.lastElementChild)

// listItems.lastElementChild.textContent = "Partha"
// listItems.firstElementChild.textContent = "Nazith"

// var newDiv = document.createElement("div")

// newDiv.textContent = "Sanjith"

// newDiv.setAttribute("id", "sabari")

// newDiv.id = "sabari"

// newDiv.className = "Ganesh"

// var container = document.querySelector(".container")
// container.insertBefore(newDiv, header )

// console.log(newDiv)

// EVENT

var clickBtn = document.getElementById("btn")
var header = document.querySelector("#header-title")


clickBtn.addEventListener("click", clickMe)
// clickBtn.addEventListener("dblclick", test)

count = 0
function clickMe(event){
    // console.log("Partha topper")
    if(count == 10){
     alert("Podhum")
     count = 0
     return
    }
    console.log(event.type)
    header.textContent = "Partha topper"
    header.style.color = "red"
    count++
}

// function test(){
//     console.log("Sabari is topper")
// }
// console.log(clickBtn)
