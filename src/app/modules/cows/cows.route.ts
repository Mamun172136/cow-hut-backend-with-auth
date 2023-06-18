import express from 'express'
import { CowController } from './cows.controller'

const router = express.Router()

router.post('/cows', CowController.createCow)
// router.get('/users', UserController.getAllUsers)
router.get('/cows/:id', CowController.getSingleCow)
router.patch('/cows/:id', CowController.updateCow)
// router.patch('/users/:id', UserController.deleteUser)

export const CowRoutes = router
