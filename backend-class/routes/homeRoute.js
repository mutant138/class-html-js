const express = require("express")
const { getHomePage , createExpense , updateExpense, getExpense,getAllExpenses, deleteExpense} = require("../controllers/homeController")
const router = express.Router()


router.get("/expense", getHomePage)
router.post("/expense", createExpense)
router.get("/get-expenses", getAllExpenses)
router.delete("/expense/:id", deleteExpense)
router.get("/get-expense/:id", getExpense)
router.patch("/expense/:id", updateExpense)

module.exports = router;