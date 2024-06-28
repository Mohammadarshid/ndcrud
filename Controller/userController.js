import { ifError } from "assert";
import UserModels from "../models/User.js";

const CreateUser = async (req, res) => {
  try {
    const { Name, FatherName, Email, Phone } = req.body;

    const NewUser = new UserModels({
      Name,
      FatherName,
      Email,
      Phone,
    });
    await NewUser.save();
    console.log(NewUser);

    res
      .status(200)
      .json({ Success: true, Message: "user Created Successfully ", NewUser });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ Success: false, Message: "internal server Error ", NewUser });
  }
};

// read api

const GetUser = async (req, res) => {
  try {
    const user = await UserModels.find();
    //    console.log(user);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, Message: "user not found" });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    return;
    res.status(500).json({ sucess: false, Message: "internal server error" });
  }
};

// update user

const UpdateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUser = await UserModels.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    console.log(UpdateUser);
    if (!UpdateUser) {
      return res
        .status(404)
        .json({ success: false, Message: "User not Found" });
    }

    res
      .status(200)
      .json({
        success: true,
        Message: "user updated Successfully",
        updatedUser,
      });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ sucess: false, Message: "internal server error" });
  }
};

//  delete user Api

const DeleteUser = async (req, res) => {
      try {
          const userId = req.params.id
          const DeleteUser = await UserModels.findByIdAndDelete(userId)
            if (!DeleteUser) {
                 return res.status(404).json({success:false,Message:"user not found"})
            }
   res.status(200).json({success:true,Message:'user Delete Successfully'})
          
          
      } catch (error) {
          
          console.log(error);
          return res
            .status(500)
            .json({ sucess: false, Message: "internal server error" });
        
      }


}


export { CreateUser, GetUser, UpdateUser,DeleteUser };
