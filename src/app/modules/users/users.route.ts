import express from 'express'
import { UserController } from './users.controller'
const router = express.Router()

router.post('/create-user', UserController.createUser)
router.get('/users', UserController.getAllUsers)
router.get('/:id', UserController.getSingleUser)

export const UserRoutes = router
