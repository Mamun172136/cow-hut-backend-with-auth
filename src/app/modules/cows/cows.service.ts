import ApiError from '../../../errors/ApiError'
import { ICow } from './cows.interface'
import { Cow } from './cows.model'

const createCow = async (user: ICow): Promise<ICow | null> => {
  const createdUser = await Cow.create(user)
  if (!createdUser) {
    throw new ApiError(400, 'failed to created user bhaiiiii')
  }
  return createdUser
}
// const getAllUsers = async (): Promise<IUser[] | null> => {
//   const data = await User.find({})
//   //   if (!createdUser) {
//   //     throw new ApiError(400, 'failed to created user bhaiiiii')
//   //   }
//   return data
// }
const getSingleCow = async (id: string): Promise<ICow | null> => {
  const data = await Cow.findById(id)
  //   if (!createdUser) {
  //     throw new ApiError(400, 'failed to created user bhaiiiii')
  //   }
  return data
}
const updateCow = async (
  id: string,
  payload: Partial<ICow>
): Promise<ICow | null> => {
  const data = await Cow.findOneAndUpdate({ _id: id }, payload, { new: true })
  //   if (!createdUser) {
  //     throw new ApiError(400, 'failed to created user bhaiiiii')
  //   }
  return data
}

// const deleteUser = async (id: string): Promise<IUser | null> => {
//   const data = await User.findByIdAndDelete(id)
//   //   if (!createdUser) {
//   //     throw new ApiError(400, 'failed to created user bhaiiiii')
//   //   }
//   return data
// }

export const CowService = {
  createCow,
  //   getAllCows,
  getSingleCow,
  updateCow,
  //   deleteCow,
}
