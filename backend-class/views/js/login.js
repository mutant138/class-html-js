
const registerForm = document.getElementById("loginForm")

registerForm.addEventListener("submit",submitDetails)

async function submitDetails(event){
    try {
        console.log("clicked")
        event.preventDefault()
        const userMail = event.target.userEmail.value
        const userPass = event.target.userPass.value

        // if(!userName || !userMail || !userPass){
        //     alert("Fill out all the details")
        //     return 
        // }

        const userObj = { userMail : userMail , userPass :  userPass}
        const res =  await fetch("http://localhost:3000/auth/login",{
            method: "POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body : JSON.stringify(userObj)
        })
        const data = await res.json()
        if(!data.okay){
            throw new Error(data.message)
        }
        if(data.okay){
 alert(data.message)
 location.replace("http://localhost:3000/home")
        }

       
        
    } catch (error) {
        console.log("error", error)
        alert(error)
    }
}