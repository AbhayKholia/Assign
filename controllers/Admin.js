import UserModel from "../models/user.js";

const GetUser = async (req, res) => {
  try {
    const users = await UserModel.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

   
    const user = await UserModel.findById(userId);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    
    if (user.role === 'admin') {
      return res.status(409).json({
        message: "You Can Not Delete Yourself (Admin)",
      });
    }

   
    await UserModel.findByIdAndDelete(userId);

    
    res.status(200).json({
      message: "User Deleted Successfully",
      user,
    });

  } catch (error) {
    console.error(error); // helpful for debugging
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export { GetUser, deleteUser };
