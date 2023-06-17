import { IUser } from './users.interface'
import { User } from './users.model'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('failed to created user bhaiiiii')
  }
  return createdUser
}

export default {
  createUser,
}
