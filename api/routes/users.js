import express from "express";
import { deleteUser, getUser, updateUser, getAllUser } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";
import { verifyUser } from "../utils/verifyToken.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
router.get("/checkauthentication", verifyToken, (req, res, next) => {
    res.send("hello user, you are logged in!")
})
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
    res.send("hello user, you are logged in & you can delete your account!")
})
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
    res.send("hello admin, you are logged in & you can delete all of your accounts!")
})

//update
router.put("/:id", verifyUser, updateUser)

//delete
router.delete("/:id", verifyUser, deleteUser)

//get
router.get("/:id", verifyUser, getUser)

//get all
router.get("/", verifyAdmin, getAllUser)

export default router;