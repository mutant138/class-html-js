const express = require("express")
const { getHomePage , createExpense , getAllExpenses, deleteExpense} = require("../controllers/homeController")
const router = express.Router()


router.get("/expense", getHomePage)
router.post("/expense", createExpense)
router.get("/get-expenses", getAllExpenses)
router.delete("/expense/:id", deleteExpense)

module.exports = router;