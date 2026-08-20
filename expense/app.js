

const expenseForm = document.getElementById("myForm")
const expenseList = document.getElementById("expenseList")

expenseForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    const expenseDetails = {
        expense: event.target.expenses.value,
        description : event.target.description.value,
        amount : event.target.amount.value,
        date : event.target.date.value,
        category: event.target.categories.value
    }
    console.log(expenseDetails)
    const {expense}   = expenseDetails
    // const expense  = expenseDetails.expense
    let li = document.createElement("li")
    li.textContent = `${expense} ₹ ${expenseDetails.amount} , Date : ${expenseDetails.date}`
    li.className = "list"
    expenseList.appendChild(li)
})