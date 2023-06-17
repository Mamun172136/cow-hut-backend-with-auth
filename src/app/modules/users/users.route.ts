import express from 'express'
import { UserController } from './users.controller'
const router = express.Router()

router.post('/create-user', UserController.createUser)
router.get('/users', UserController.getAllUsers)

export const UserRoutes = router
