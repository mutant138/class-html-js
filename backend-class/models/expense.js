const mongoose = require("mongoose")



const expenseSchema = new mongoose.Schema({
   expense : {
    type : String,
    required : true
   },
   description :{
    type : String
   },
   amount :{
    type : Number
   },
   date :{
    type : Date
   },
   category :{
    type : String,
    enum : ["fuel", "entertainment", "food","home" ]
   }
})


const Expense = mongoose.model('expense', expenseSchema);
module.exports = Expense