const express = require("express")
const { getLoginPage , getRegisterPage, postRegister , postLogin} = require("../controllers/authController")
const router = express.Router()
const {registerValidation ,  loginValidation } = require("../middlewares/validation-middleware")


router.get("/login" , getLoginPage)
router.get("/register", getRegisterPage)
router.post("/register", registerValidation , postRegister)
router.post("/login", loginValidation ,postLogin )


module.exports = router;