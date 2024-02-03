"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const cows_controller_1 = require("./cows.controller");
const router = express_1.default.Router();
router.post('/cows', cows_controller_1.CowController.createCow);
// router.get('/users', UserController.getAllUsers)
router.get('/cows/', cows_controller_1.CowController.getAllCows);
router.get('/cows/:id', cows_controller_1.CowController.getSingleCow);
router.patch('/cows/:id', cows_controller_1.CowController.updateCow);
router.delete('/cows/:id', cows_controller_1.CowController.deleteCow);
exports.CowRoutes = router;
