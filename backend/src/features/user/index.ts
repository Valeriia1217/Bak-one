import {Router} from "express"
import {loginUser, registerUser} from "./handlers";

export const router = Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
