import { NextFunction, Request, Response } from 'express'
import { CowService } from './cows.service'

const createCow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { ...userData } = req.body
    console.log(req.body)
    const result = await CowService.createCow(userData)

    res.status(200).json({
      success: true,
      message: ' cows created successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
// const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const result = await UserService.getAllUsers()

//     res.status(200).json({
//       success: true,
//       message: ' users retrieved successfully',
//       data: result,
//     })
//   } catch (error) {
//     next(error)
//   }
// }
const getSingleCow = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id = req.params.id
    const result = await CowService.getSingleCow(id)

    res.status(200).json({
      success: true,
      message: ' cow retrieved successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const updateCow = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    const updatedData = req.body
    const result = await CowService.updateCow(id, updatedData)

    res.status(200).json({
      success: true,
      message: ' cow updated successfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
// const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const id = req.params.id

//     const result = await UserService.deleteUser(id)

//     res.status(200).json({
//       success: true,
//       message: ' user updated successfully',
//       data: result,
//     })
//   } catch (error) {
//     next(error)
//   }
// }
export const CowController = {
  createCow,
  //   getAllCows,
  getSingleCow,
  updateCow,
  //   deleteCow,
}
