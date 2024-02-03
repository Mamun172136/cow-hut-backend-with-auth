"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const users_model_1 = require("./users.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createdUser = yield users_model_1.User.create(user);
    if (!createdUser) {
        throw new ApiError_1.default(400, 'failed to created user bhaiiiii');
    }
    return createdUser;
});
const getAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield users_model_1.User.find({});
    //   if (!createdUser) {
    //     throw new ApiError(400, 'failed to created user bhaiiiii')
    //   }
    return data;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield users_model_1.User.findById(id);
    //   if (!createdUser) {
    //     throw new ApiError(400, 'failed to created user bhaiiiii')
    //   }
    return data;
});
const updateUser = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield users_model_1.User.findOneAndUpdate({ _id: id }, payload, { new: true });
    //   if (!createdUser) {
    //     throw new ApiError(400, 'failed to created user bhaiiiii')
    //   }
    return data;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield users_model_1.User.findByIdAndDelete(id);
    //   if (!createdUser) {
    //     throw new ApiError(400, 'failed to created user bhaiiiii')
    //   }
    return data;
});
exports.UserService = {
    createUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
};
