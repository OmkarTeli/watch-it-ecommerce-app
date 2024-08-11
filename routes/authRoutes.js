import express from "express";
import {
   registerController,
   loginController,
   forgotPasswordController,
   testController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

// ROUTER OBJECT
const router = express.Router();

//ROUTING
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//FORGOT PASSWORD || POST
router.post("/forgot-password", forgotPasswordController);

//TEST ROUTES
router.get("/test", requireSignIn, isAdmin, testController);

//PROTECTED ROUTE
router.get("/user-auth", requireSignIn, (req, res) => {
   res.status(200).send({ ok: true });
});

//PROTECTED ADMIN ROUTE
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
   res.status(200).send({ ok: true });
});

export default router;
