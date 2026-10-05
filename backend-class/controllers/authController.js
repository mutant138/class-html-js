





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

module.exports = {
    getLoginPage,
    getRegisterPage
}