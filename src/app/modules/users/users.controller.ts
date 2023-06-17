import { NextFunction, Request, Response } from 'express'
import { UserService } from './users.service'

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body
    console.log(req.body)
    const result = await UserService.createUser(userData)

    res.status(200).json({
      success: true,
      message: ' users created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await UserService.getAllUsers()

    res.status(200).json({
      success: true,
      message: ' users retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const getSingleUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const result = await UserService.getSingleUser(id)

    res.status(200).json({
      success: true,
      message: ' user retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
}
