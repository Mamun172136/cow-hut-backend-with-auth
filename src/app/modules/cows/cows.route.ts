import express from 'express'
import { CowController } from './cows.controller'

const router = express.Router()

router.post('/cows', CowController.createCow)
// router.get('/users', UserController.getAllUsers)
// router.get('/users/:id', UserController.getSingleUser)
// router.patch('/users/:id', UserController.updateUser)
// router.patch('/users/:id', UserController.deleteUser)

export const CowRoutes = router
