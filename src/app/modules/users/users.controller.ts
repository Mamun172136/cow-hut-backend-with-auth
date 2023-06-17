import { Request, Response } from 'express'
import usersService from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { ...userData } = req.body
    console.log(req.body)
    const result = await usersService.createUser(userData)

    res.status(200).json({
      success: true,
      message: 'yayyyyyyyyy user created successfully',
      data: result,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'o bhai failed to create user ',
    })
  }
}
export default {
  createUser,
}
