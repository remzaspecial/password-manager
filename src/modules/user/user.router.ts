import express from "express";
import { UserController } from "./user.controller";

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", userController.getUsers.bind(userController));
userRouter.get("/:id", userController.getUserById.bind(userController));
userRouter.post("/", userController.createUser.bind(userController));
userRouter.put("/:id", userController.updateUser.bind(userController));
userRouter.delete("/:id", userController.deleteUser.bind(userController));

export default userRouter;
