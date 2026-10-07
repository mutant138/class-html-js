


const registerForm = document.getElementById("registerForm")

registerForm.addEventListener("submit",submitDetails)

async function submitDetails(event){
    try {
        console.log("cliecked")
        event.preventDefault()
        const userName = event.target.userName.value
        const userMail = event.target.userEmail.value
        const userPass = event.target.userPass.value

        // if(!userName || !userMail || !userPass){
        //     alert("Fill out all the details")
        //     return 
        // }

        const userObj = { userName : userName, userMail : userMail , userPass :  userPass}
        const res =  await fetch("http://localhost:3000/auth/register",{
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
        
    } catch (error) {
        console.log("error", error)
        alert(error)
    }
}