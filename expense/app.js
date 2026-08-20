

const expenseForm = document.getElementById("myForm")
const expenseList = document.getElementById("expenseList")
const expenseArr = []

expenseForm.addEventListener("submit",(event)=>{
    console.log(">>>>>>>>>", "submitFunc")
    event.preventDefault()
    const expenseDetails = {
        expense: event.target.expenses.value,
        description : event.target.description.value,
        amount : event.target.amount.value,
        date : event.target.date.value,
        category: event.target.categories.value
    }
    // for (const element in expenseDetails) {
    //     if(!expenseDetails[element]){
    //         alert("Enter required fields")
    //         return
    //     }
    // }
    // if(!expenseDetails.expense || !expenseDetails.description){
    //     alert("Enter mandotory fields")
    //     return
    // }
    // if(expenseDetails.amount > 1000){
    //     alert("Enter in the range")
    //     return
    // }
    // console.log(expenseDetails)
    const {expense}   = expenseDetails
    // const expense  = expenseDetails.expense
    let li = document.createElement("li")
    li.textContent = `${expense}`
    li.className = "list"
    expenseList.appendChild(li)
    expenseArr.push(expense)
    console.log(expenseArr)
    localStorage.setItem("expenses", JSON.stringify(expenseArr))
  
})


document.addEventListener("DOMContentLoaded",()=>{
   const expList=  JSON.parse(localStorage.getItem("expenses"))
   console.log(expList)
    for (const ele of expList) {
        let li = document.createElement("li")
    li.textContent = `${ele}`
    li.className = "list"
    expenseList.appendChild(li)
    }
})