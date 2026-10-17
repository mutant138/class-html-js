let isAuth = localStorage.getItem("isAuth")
const login_btn = document.getElementById("loginBtn")
const expenseForm = document.getElementById("myForm")
const expenseList = document.getElementById("expenseList")

let editId = null
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
    console.log("editId" , editId)

    if(editId){
         const res = await fetch(`http://www.localhost:3000/home/expense/${editId}`,{
                method :"PATCH",
                  headers:{
                 'Content-Type': 'application/json'
                },
                body : JSON.stringify(expenseDetails)
         })
         if(!res.ok){}
         const respData = res.json()
         if(!respData.okay){}
         getAllExpensesHandler()
        return
    }
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
        getAllExpensesHandler()
        window.location.reload()
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
    <button class="edtBtn" data-index="${item._id}"> Edit </button>
    <button class="dltBtn" data-index="${item._id}"> Delete </button>
    `
    expenseList.appendChild(li)
    });
        }
  
    } catch (error) {
        console.error("errorin getting expenses", error)
    }
}


expenseList.addEventListener("click",async(event)=>{
    // console.log(event, "clickkkkkkk")
    try {
          const target = event.target
    const id = target.dataset.index
    console.log("indexx", id)
    console.dir(target, "target")
    if(target.classList.contains("dltBtn")){
        let dlt = confirm("Are you sure to delete ?")
        if(dlt){
            const res = await fetch(`http://www.localhost:3000/home/expense/${id}`,{
                method :"DELETE",
            })
            if(res.ok){
                const respData = await res.json()
                if(!respData.okay){
                    throw new Error(respData.message)
                }
                alert(respData.message)
                getAllExpensesHandler()
            }
        }

    }else if(target.classList.contains("edtBtn")){
        // const item = expenseArr[id]
        editId = id
         const res = await fetch(`http://www.localhost:3000/home/get-expense/${id}`)
         if(res.ok){
            const respData = await res.json()
            if(!respData.okay){
               throw new Error(respData.message)
            }
            const expenseData = respData.data
            expenseForm.expenses.value = expenseData.expense
            expenseForm.description.value = expenseData.description
            expenseForm.amount.value = expenseData.amount
            expenseForm.date.value = new Date(expenseData.date)
            expenseForm.categories.value = expenseData.category
        }
    }
    } catch (error) {
        console.log("Error"), error
    }
  

})