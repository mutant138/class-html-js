const express = require("express")
const User = require("../models/users")




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
        console.log("userrrobjj", userObj)

        User.create(userObj)
        return res.status(201).json({message : "Successfully registered", okay : true})

    } catch (error) {
        console.error("Err in postRegister", error)
    }
}

// IP(123.123.123.23) -> hongkong(VPN) (213.234.24.432) ->  yts  -> ip


module.exports = {
    getLoginPage,
    getRegisterPage,
    postLogin,
    postRegister
}