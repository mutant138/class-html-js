const express = require("express")
const { getHomePage , createExpense , getAllExpenses} = require("../controllers/homeController")
const router = express.Router()


router.get("/expense", getHomePage)
router.post("/expense", createExpense)
router.get("/get-expenses", getAllExpenses)

module.exports = router;