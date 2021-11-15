import express from 'express'

import { getLogin } from '../controllers/login.js'

const router = express.Router()

router.get('/', getLogin)

export default router
