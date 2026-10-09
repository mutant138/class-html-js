


document.addEventListener("DOMContentLoaded",()=>{
    const isAuth = localStorage.getItem("isAuth")
    if(!isAuth){
        location.href="/login"
    }
})