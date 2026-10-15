let isAuth = localStorage.getItem("isAuth")
const login_btn = document.getElementById("loginBtn")
const expenseForm = document.getElementById("myForm")
const expenseList = document.getElementById("expenseList")
document.addEventListener("DOMContentLoaded",()=>{
    const isAuth = localStorage.getItem("isAuth")
    if(!isAuth){
        location.href="/auth/login"
        return
    }
    login_btn.textContent = "logout"
    login_btn.style = "background-color:red"
    getAllExpensesHandler()
})


login_btn.addEventListener("click", ()=>{
    localStorage.clear()
    location.href= "/auth/login"
})


expenseForm.addEventListener("submit",async (event)=>{
    try {
        event.preventDefault()
        const expenseDetails = {
        expense: event.target.expenses.value,
        description : event.target.description.value,
        amount : event.target.amount.value,
        date : event.target.date.value,
        category: event.target.categories.value
    }
    console.log("expenseDetails",expenseDetails)
    const res = await fetch("http://localhost:3000/home/expense",{
        method: "POST",
         headers:{
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(expenseDetails)
    })

    if(res.ok){
        const data = await res.json()
        if(!data.okay){
            throw new Error(data.message)
        }

    }
    } catch (error) {
        console.log("Error in expense form submit", error)
        alert(error)
    }
})


async function getAllExpensesHandler(){
    try {
        expenseList.innerHTML = ""
        const resp = await fetch("http://localhost:3000/home/get-expenses")
        if(resp.ok){
            const expensesData = await resp.json()
            let expenses = expensesData.data
            console.log("fetched expenses", expenses)
              expenses.forEach((item, index) => {
    let li = document.createElement("li")
    li.innerHTML = `<span>${item.expense} - ${item.amount} (${item.category})<span>
    <button class="edtBtn" data-index="${index}"> Edit </button>
    <button class="dltBtn" data-index="${index}"> Delete </button>
    `
    expenseList.appendChild(li)
    });
        }
            // console.log(listToRender)
  
    } catch (error) {
        console.error("errorin getting expenses", error)
    }
}