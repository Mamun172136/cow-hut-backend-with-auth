import express from 'express'
import { UserController } from './users.controller'
const router = express.Router()

router.post('/auth/signup', UserController.createUser)
router.get('/users', UserController.getAllUsers)
router.get('/users/:id', UserController.getSingleUser)
router.get('/change/:id', UserController.updateDocument)
router.patch('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)

export const UserRoutes = router
