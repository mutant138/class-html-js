const express = require("express")



const registerValidation = (req,res, next)=>{
    try {
        const userObj = req.body
        console.log("middllllllware",userObj)
         if(!userObj.userName ||!userObj.userMail || !userObj.userPass){
           return res.status(404).json({message : "Fill out all required fields", okay: false})
        }
        if(userObj.userPass.length < 6){
            return res.status(404).json({message : "set strong password", okay: false })
        }
    } catch (error) {
        return res.status(500).json({error : error})
    }
    next()
}

const loginValidation = (req,res,next)=>{
    try {
        const userObj = req.body
        console.log("middllllllware",userObj)
         if(!userObj.userMail || !userObj.userPass){
           return res.status(404).json({message : "Fill out all required fields", okay: false})
        }
        if(userObj.userPass.length < 6){
            return res.status(404).json({message : "set strong password", okay: false })
        }
    } catch (error) {
        return res.status(500).json({error : error})
    }
    next()
}



module.exports = {registerValidation, loginValidation}