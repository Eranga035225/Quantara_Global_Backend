import express from "express";
import { createUser, loginUser} from "../controllers/userController.js";
import authenticateUser from "../middleware/userAuthenticator.js";
// import authenticateUser from "../middleware/userAuthenticator.js";

const userRouter = express.Router();

userRouter.post("/",authenticateUser, createUser);
userRouter.post("/login", loginUser);

export default userRouter;
