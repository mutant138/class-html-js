const express = require("express")
const { getLoginPage , getRegisterPage, postRegister } = require("../controllers/authController")
const router = express.Router()
const {registerValidation ,  loginValidation } = require("../middlewares/validation-middleware")


router.get("/login" , getLoginPage)
router.get("/register", getRegisterPage)
router.post("/register", registerValidation , postRegister)


module.exports = router;