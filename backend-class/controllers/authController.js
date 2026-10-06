





const getLoginPage = async(req,res)=>{
    try {
        res.sendFile("login.html", {root : "views/pages"} )
    } catch (error) {
        console.error("Err in getloginPage", error)
    }
}

const getRegisterPage = async(req,res)=>{
    try {
        res.sendFile("register.html", {root : "views/pages"})
    } catch (error) {
        console.error("Err in getRegisterPage", error)
    }
}

const postLogin = async(req,res)=>{

}

const postRegister = async(req,res)=>{
    try {
        const userObj = req.body
        if(!userObj.userName ||!userObj.userMail || !userObj.userPass){
           return res.status(404).json({message : "Fill out all required fields", okay: false})
        }
        console.log("userrrobjj", userObj)

        
        
    } catch (error) {
        console.error("Err in postRegister", error)
    }
}

module.exports = {
    getLoginPage,
    getRegisterPage,
    postLogin,
    postRegister
}