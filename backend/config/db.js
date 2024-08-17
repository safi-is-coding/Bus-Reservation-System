const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://safimaz:safimaz123@backenddb.wphyzpb.mongodb.net/BusDB?retryWrites=true&w=majority&appName=BackendDB").then(()=> {console.log("DB Connected Successfully");})
        
    } catch (error) {
        console.log("DB Connection error : ", error);
    }
}

module.exports = connectDB