const express = require('express');
const router = express.Router();
const authcontollers = require('../controllers/auth-controller');
const validate = require('../middleware/validate-middleware');
const {signupSchema, loginSchema} = require('../validators/auth-validator');
const authMiddleware = require('../middleware/auth-middleware');

router.route("/").get(authcontollers.home)
router.route("/register").post(validate(signupSchema), authcontollers.register)
router.route("/login").post(validate(loginSchema),authcontollers.login)

router.route("/user").get(authMiddleware, authcontollers.user)

module.exports = router;