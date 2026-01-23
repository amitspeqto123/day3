import express from "express"
import { createUser, deleteUser, getAlluser, updateUser, userFindById, } from "../controller/UserController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/all", getAlluser);
router.get("/:id", userFindById);
router.delete("/delete/:id", deleteUser)
router.put("/update/:id", updateUser);

export default router;