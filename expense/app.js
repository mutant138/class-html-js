

// const expenseForm = document.getElementById("myForm")
// const expenseList = document.getElementById("expenseList")
// const filterCategory = document.getElementById("filterCategory")
// const searchInput = document.getElementById("searchInput")


// const expenseArr = JSON.parse(localStorage.getItem("expenses")) || []
// let edtIndx = null

// let submitIsdisabled = JSON.parse(localStorage.getItem("isLoggedIn")) || true


// function updateTotal(list = expenseArr){
//  const totalExpense = list.reduce((sum, curr)=> sum + Number(curr.amount),0)
//  document.getElementById("totalExpense").textContent = `Total spent : ${totalExpense}`
// }



// document.addEventListener("DOMContentLoaded",renderAllContent())
// filterCategory.addEventListener("change",filtersAndRender)
// searchInput.addEventListener("input", filtersAndRender)

// expenseList.addEventListener("click",(event)=>{
//     // console.log(event, "clickkkkkkk")
//     const target = event.target
//     const index = target.dataset.index
//     console.dir(target, "target")
//     if(target.classList.contains("dltBtn")){
//         let dlt = confirm("Are you sure to delete ?")
//         console.log(dlt,"dltdltdltdlt")
//         if(dlt){
//          expenseArr.splice(index, 1)
//         localStorage.setItem("expenses", JSON.stringify(expenseArr))
//         filtersAndRender()
//         }
//         return
       
//     }else if(target.classList.contains("edtBtn")){
//         const item = expenseArr[index]
//         expenseForm.expenses.value = item.expense
//         expenseForm.description.value = item.description
//         expenseForm.amount.value = item.amount
//         expenseForm.date.value = item.date
//         expenseForm.categories.value = item.category
//         edtIndx = index
//     }

// })

// expenseForm.addEventListener("submit",(event)=>{
//     event.preventDefault()
//     const expenseDetails = {
//         expense: event.target.expenses.value,
//         description : event.target.description.value,
//         amount : event.target.amount.value,
//         date : event.target.date.value,
//         category: event.target.categories.value
//     }
//     if(edtIndx !== null){
//         expenseArr[edtIndx] = expenseDetails
//         edtIndx = null
//     }else{
//         expenseArr.push(expenseDetails)
//     }
//     localStorage.setItem("expenses", JSON.stringify(expenseArr))
//     renderAllContent()
//     event.target.reset()
// })


// function renderAllContent(listToRender = expenseArr){
//     expenseList.innerHTML = ""
//     console.log(listToRender)
//     listToRender.forEach((item, index) => {
//     let li = document.createElement("li")
//     li.innerHTML = `<span>${item.expense} - ${item.amount} (${item.category})<span>
//     <button class="edtBtn" data-index="${index}"> Edit </button>
//     <button class="dltBtn" data-index="${index}"> Delete </button>
//     `
//     expenseList.appendChild(li)
//     });
//    updateTotal()
// }

// function filtersAndRender(){
//     const selected = filterCategory.value
//     const searchText = searchInput.value.toLowerCase()

//     const filtered = expenseArr.filter((item)=>{
//          const matchesCat = selected === "all"|| item.category === selected
//          const matchSearch = item.expense.toLowerCase().includes(searchText)
//          return matchesCat && matchSearch
//     })
//     console.log(filtered)
//     renderAllContent(filtered)
// }



const getBackendResponse = async ()=>{
      const res = await fetch("http://localhost:3000/health")
      console.log("ress>>>>",res)
      const data = await res.json()
      console.log("Data",data)
}

getBackendResponse()