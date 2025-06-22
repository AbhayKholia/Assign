import UserModel from "../models/user.js";
import bcryptjs, { truncates } from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existUser = await UserModel.findOne({ email });
    if (existUser) {
      return res.status(401).json({
        success: false,
        message: "User already exist",
      });
    }
    const haspassword = await bcryptjs.hashSync(password, 10);

    const newUser = new UserModel({
      name,
      email,
      password: haspassword,
    });

    await newUser.save();
    res.status(200).json({
      message: "user register successfull",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRETE);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      maxAge: 3600000,
    });

    res.status(200).json({
      success: true,
      message: "Login Successfully",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server error",
    });
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    res.status(200).json({
      message: "User Logout Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { register, login, logout };
