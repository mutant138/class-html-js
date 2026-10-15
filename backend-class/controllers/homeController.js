const express = require("express")
const bcrypt = require("bcrypt")
const Expense = require("../models/expense")




const getHomePage = async(req,res)=>{
    try {
        res.sendFile("home.html", {root : "views/pages"} )
    } catch (error) {
        console.error("Err in getHomePage", error)
    }
}

const createExpense = async(req,res)=>{
    try {
        console.log("req.body", req.body)
        const newExpense = await Expense.create(req.body)
        if(newExpense){
            return res.status(201).json({okay : true , message: "Expense added successfully"})
        }

return res.status(400).json({okay : false , message : "Expense not added"})
    } catch (error) {
        console.error("Err in createExpense", error)
    }
}


const getAllExpenses = async(req,res)=>{
    try {
        const expenses = await Expense.find()
        if(expenses.length <= 0){
            return res.status(404).json({okay : false , message : "No expense found"})
        }
        return res.status(200).json({okay : true , message: "Succesfull fetched", data : expenses})
    } catch (error) {
         console.error("Err in getAllExpenses", error)
    }
}


module.exports = {
    getHomePage,
    createExpense,
    getAllExpenses
}