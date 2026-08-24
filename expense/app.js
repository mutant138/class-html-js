

const expenseForm = document.getElementById("myForm")
const expenseList = document.getElementById("expenseList")
const expenseArr = JSON.parse(localStorage.getItem("expenses")) || []


let edtIndx = null

expenseForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const expenseDetails = {
        expense: event.target.expenses.value,
        description : event.target.description.value,
        amount : event.target.amount.value,
        date : event.target.date.value,
        category: event.target.categories.value
    }
    if(edtIndx !== null){
        expenseArr[edtIndx] = expenseDetails
        edtIndx = null
    }else{
        expenseArr.push(expenseDetails)
    }
    localStorage.setItem("expenses", JSON.stringify(expenseArr))
    renderAllContent()
    event.target.reset()
})

document.addEventListener("DOMContentLoaded",renderAllContent)



function renderAllContent(){
    expenseList.innerHTML = ""
    expenseArr.forEach((item, index) => {
    let li = document.createElement("li")
    li.textContent = `${item.expense}, Spent : ${item.amount}`
    li.className = "list"

     let dlteBtn = document.createElement("button")
    dlteBtn.textContent = "Delete"
    dlteBtn.className = "dltBtn"
    let editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.className = "edtBtn"
    editBtn.addEventListener("click",()=>{
        expenseForm.expenses.value = item.expense
        expenseForm.description.value = item.description
        expenseForm.amount.value = item.amount
        expenseForm.date.value = item.date
        expenseForm.categories.value = item.category
        
        edtIndx=index

    })
    dlteBtn.addEventListener("click",()=>{
        console.log("delete", index)
        expenseArr.splice(index,1)
        localStorage.setItem("expenses", JSON.stringify(expenseArr))
        renderAllContent();
    })
    li.appendChild(dlteBtn)
    li.appendChild(editBtn)
    expenseList.appendChild(li)
    });
}