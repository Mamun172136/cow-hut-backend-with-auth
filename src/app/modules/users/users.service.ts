import ApiError from '../../../errors/ApiError'
import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  console.log('from user service')
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'failed to created user bhaiiiii')
  }
  return createdUser
}

export const UserService = {
  createUser,
}
