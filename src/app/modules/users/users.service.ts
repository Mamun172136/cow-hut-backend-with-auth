import ApiError from '../../../errors/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'failed to created user bhaiiiii')
  }
  return createdUser
}
const getAllUsers = async (): Promise<IUser[] | null> => {
  const data = await User.find({})
  //   if (!createdUser) {
  //     throw new ApiError(400, 'failed to created user bhaiiiii')
  //   }
  return data
}

export const UserService = {
  createUser,
  getAllUsers,
}
