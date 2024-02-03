import { Types } from 'mongoose'
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
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const data = await User.findById(id)

  //   if (!createdUser) {
  //     throw new ApiError(400, 'failed to created user bhaiiiii')
  //   }
  return data
}
const updateUser = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const data = await User.findOneAndUpdate({ _id: id }, payload, { new: true })
  //   if (!createdUser) {
  //     throw new ApiError(400, 'failed to created user bhaiiiii')
  //   }
  return data
}

const deleteUser = async (id: string): Promise<IUser | null> => {
  const data = await User.findByIdAndDelete(id)
  //   if (!createdUser) {
  //     throw new ApiError(400, 'failed to created user bhaiiiii')
  //   }
  return data
}

const updateDocument = async (id: string): Promise<IUser> => {
  const existingUser = await User.findById(id)

  if (!existingUser) {
    throw new ApiError(400, 'User not found')
  }

  existingUser.phoneNumber = '0129484755'
  // Copy the fields from the existing document
  const { phoneNumber, role, password, name, address, budget, income } =
    existingUser

  // Create a new document with the desired _id
  const newUser = new User({
    _id: new Types.ObjectId('6177a5b87d32123f08d2f5d4'),
    phoneNumber,
    role,
    password,
    name,
    address,
    budget,
    income,
  })

  // Save the new document
  await newUser.save()

  // Remove the old document
  await User.deleteOne({ _id: existingUser._id })

  return newUser
}
export const UserService = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
  updateDocument,
}
