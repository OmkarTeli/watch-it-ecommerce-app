import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";

// REGISTER || POST;
export const registerController = async (req, res) => {
   try {
      const { name, email, password, phone, address, answer } = req.body;

      //validation
      if (!name) {
         return res.send({ message: "Name is  required" });
      }
      if (!email) {
         return res.send({ message: "Email is  required" });
      }
      if (!password) {
         return res.send({ message: "Password is  required" });
      }
      if (!phone) {
         return res.send({ message: "Phone is  required" });
      }
      if (!address) {
         return res.send({ message: "Address is  required" });
      }
      if (!answer) {
         return res.send({ message: "Answer is  required" });
      }

      //check user
      const existingUser = await userModel.findOne({ email });

      //existing user
      if (existingUser) {
         return res.status(200).send({
            success: false,
            message: "already registered please login",
         });
      }

      //register user
      const hashedPassword = await hashPassword(password);

      //save
      const user = await new userModel({
         name,
         email,
         phone,
         address,
         password: hashedPassword,
         answer,
      }).save();

      res.status(201).send({
         success: true,
         message: "user register successfully",
         user,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in registration",
         error,
      });
   }
};

//LOGIN || POST
export const loginController = async (req, res) => {
   try {
      const { email, password } = req.body;

      //validation
      if (!email || !password) {
         return res.status(404).send({
            success: false,
            message: "invalid email or password",
         });
      }
      //check user
      const user = await userModel.findOne({ email });
      if (!user) {
         return res.status(404).send({
            success: false,
            message: "email is not registered",
            error,
         });
      }

      //check password
      const match = await comparePassword(password, user.password);
      if (!match) {
         return res.status(200).send({
            success: false,
            message: "invalid password",
         });
      }

      //TOKEN
      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
         expiresIn: "7d",
      });
      res.status(200).send({
         success: true,
         message: "login successfully",
         user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            address: user.address,
         },
         token,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "error in login",
         error,
      });
   }
};

//FORGOT PASSWORD CONTROLLER
export const forgotPasswordController = async (req, res) => {
   try {
      const { email, answer, newPassword } = req.body;
      if (!email) {
         res.status(400).send({ message: "Emai is required" });
      }
      if (!answer) {
         res.status(400).send({ message: "answer is required" });
      }
      if (!newPassword) {
         res.status(400).send({ message: "New Password is required" });
      }
      //check
      const user = await userModel.findOne({ email, answer });
      //validation
      if (!user) {
         return res.status(404).send({
            success: false,
            message: "Wrong Email Or Answer",
         });
      }
      const hashed = await hashPassword(newPassword);
      await userModel.findByIdAndUpdate(user._id, { password: hashed });
      res.status(200).send({
         success: true,
         message: "Password Reset Successfully",
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: "something went wrong in forgot password controller",
         error,
      });
   }
};

//TEST CONTROLLER
export const testController = async (req, res) => {
   res.send("protected route");
};
