import express from "express";

const router = express.Router()

import { authUser, registerCustomer } from "../Controller/customerController.js";

router.post('/registercustomer',registerCustomer)
router.post('/login', authUser)

export default router