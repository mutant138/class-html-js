const express = require("express")
const bcrypt = require("bcrypt")
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

// const postLogin = async(req,res)=>{

// }

// salt -> 
// 1246 -> @345T545r6jhbggfcgvynnvghb#
// 1246 -> @345Tghgvfvfcgvjnbjbhbuy#

const postRegister = async(req,res)=>{
    try {
        const {userName , userMail, userPass} = req.body
        // console.log("userrrobjj", userObj)

        // User.create(userObj)

        const hashedPass =  await bcrypt.hash(userPass, 10)
        console.log(hashedPass, "hashedPasshashedPass")
        const existingUser = await User.findOne({userMail})
        console.log(existingUser,"existingUser")
        if(existingUser){
         return res.status(400).json({message : "User already exist"})
        }
        
        User.create({userName: userName, userMail, userPass: hashedPass})
        return res.status(201).json({message : "Successfully registered", okay : true})

    } catch (error) {
        console.error("Err in postRegister", error)
        return res.status(500).json({message : "Internal server error"})
    }
}

const postLogin = async(req,res)=>{
    try {
        const {userEmail , userPass} = req.body
        
       const foundUser = await User.findOne({userEmail : userEmail})
       console.log(foundUser, "foundUser")
      
       if(!foundUser){
          return res.status(404).json({message : "User not found", okay: false})
       }

       let isMatch = false
       console.log(foundUser.userName,">>>>>>>.userName")

       if(foundUser.userPass === userPass){
        isMatch = true
       }
       if(!isMatch){
        return res.status(404).json({message : "Invalid credentials", okay: false})
       }
       return res.status(200).json({message : "User logged in succesfully", okay : true})

    } catch (error) {
        console.error("Err in postLogin", error)
        return res.status(500).json({message : "Internal server error"})
    }
}

// IP(123.123.123.23) -> hongkong(VPN) (213.234.24.432) ->  yts  -> ip


module.exports = {
    getLoginPage,
    getRegisterPage,
    postLogin,
    postRegister
}