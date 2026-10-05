const express = require("express")
const { getLoginPage , getRegisterPage } = require("../controllers/authController")
const router = express.Router()


router.get("/login" , getLoginPage)
router.get("/register", getRegisterPage)


module.exports = router;