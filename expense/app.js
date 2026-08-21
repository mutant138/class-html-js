

const expenseForm = document.getElementById("myForm")
const expenseList = document.getElementById("expenseList")
const expenseArr = JSON.parse(localStorage.getItem("expenses")) || []

expenseForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const expenseDetails = {
        expense: event.target.expenses.value,
        description : event.target.description.value,
        amount : event.target.amount.value,
        date : event.target.date.value,
        category: event.target.categories.value
    }
    
    expenseArr.push(expenseDetails)
    localStorage.setItem("expenses", JSON.stringify(expenseArr))
    renderAllContent()
    event.target.reset()
})

document.addEventListener("DOMContentLoaded",renderAllContent)

function renderAllContent(){
    expenseList.innerHTML = ""
    expenseArr.forEach((item, index) => {
    let li = document.createElement("li")
    li.textContent = `${item.expense}`
    li.className = "list"

     let dlteBtn = document.createElement("button")
    dlteBtn.textContent = "Delete"
    dlteBtn.addEventListener("click",()=>{
        console.log("delete", index)
        expenseArr.splice(index,1)
        localStorage.setItem("expenses", JSON.stringify(expenseArr))
        renderAllContent();
    })
    li.appendChild(dlteBtn)
    expenseList.appendChild(li)
    });
}