import { User } from "../model/User.js";
import {
  createUserService,
  deleteUserService,
  getAllUserService,
} from "../service/UserService.js";

// export const createuser = async (req, res) => {
//   try {
//     const { name, email, age, location } = req.body;
//      if (!email) {
//       return res.status(400).json({
//         success: false,
//         message: "Email is required",
//       });
//     }
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(409).json({
//         success: false,
//         message: "User already registered..",
//       });
//     }
//     const newuser = await User.create({
//         name,
//         email,
//         age,
//         location
//     })
//     return res.status(201).json({
//         success: true,
//         message: "user created Successfully..",
//         tolal: newuser.length,
//         data: newuser
//     })
//   } catch (error) {
//     console.log("Error in user creating", error.message);
//   }
// };

export const createUser = async (req, res) => {
  try {
    const newUser = await createUserService(req.body);
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      total: newUser.length,
      newUser,
    });
  } catch (error) {
    if (error.message === "user already exsists") {
      return res.status(409).json({
        success: false,
        message: "User already exsists",
      });
    }
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// export const getAlluser = async (req, res) =>{
//     try{
//         const totalUser = await User.find();
//         return res.status(200).json({
//             success: true,
//             message: "All Users Fetched..",
//             total: totalUser.length,
//             data: totalUser
//         })
//     }catch(error){
//         console.log("Error in getting total user", error.message);
//     }
// }
export const getAlluser = async (req, res) => {
  try {
    const totalUser = await getAllUserService();
    return res.status(200).json({
      success: true,
      message: "All User fetched..",
      toal: totalUser.length,
      data: totalUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
// export const deleteUser = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const user = await User.findById(id);
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "User not found",
//       });
//     }
//     const deletedUser = await User.findByIdAndDelete(id);
//     return res.status(200).json({
//       success: true,
//       message: "user deleted successfully..",
//       deleteUser,
//     });
//   } catch (error) {
//     console.log("Error in deleting user", error.message);
//   }
// };

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);
    return res.status(200).json({
        success: true,
        message: "User Deleted successfully.."
    })
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
export const userFindById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "User fetched by id..",
      user,
    });
  } catch (error) {
    console.log("Error in single user", error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const { name, email, age, location } = req.body;
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // if(name) user.name = name;
    // if(email) user.email = email;
    // if(age) user.age = age;
    // if(location) user.location = location;
    // const updateUser = await user.save();
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    return res.status(201).json({
      success: true,
      message: "User updated successfully..",
      updatedUser,
    });
  } catch (error) {
    console.log("Error in updating user", error.message);
  }
};
