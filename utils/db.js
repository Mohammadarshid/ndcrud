import  mongoose from "mongoose";

const dbCons = async () => {
  try {
   await  mongoose.connect(process.env.DB_URL);
    console.log("mongodb is connected successfully");
  } catch (error) {
       console.log(error);
  }
};

export default dbCons