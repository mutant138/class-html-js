const express = require("express")
const { getLoginPage , getRegisterPage, postRegister } = require("../controllers/authController")
const router = express.Router()


router.get("/login" , getLoginPage)
router.get("/register", getRegisterPage)
router.post("/register", postRegister)


module.exports = router;