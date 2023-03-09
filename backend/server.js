const dotenv = require("dotenv").config();
const express = require("express");
//const connectDB = require("./config/connectDB.js");
const mongoose = require("mongoose");
const Task = require("./models/taskModel");
const app = express();
const taskRoutes = require("./routes/taskRoute");
const cors = require("cors");

app.use(express.json());//same nichertar moto just json data post hishebe pathanor jonno
app.use(express.urlencoded({extended: false})); //form data post request hishebe save korar jonno
/*app.use(
    cors({
    origin: ["http://localhost:3000/"] //we can also specify from which origins we can have the access of server
})

);*/
// from any origin the server is accessable
app.use(cors({
    origin: ["http://localhost:3000","mern-taskScheduler-app.onrender.com"]
}));  //should be before the routes


app.use("/api/tasks",taskRoutes);

//routes

app.get("/",(req,res)=>{
    res.send("Home page route");
});







const PORT = process.env.PORT || 5000;
//one way preferred way to connect to mongoo
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(PORT,()=>{
             console.log(`Server is running on port number ${PORT}`);
             });
}).catch((err)=>{
    console.log(err);
})

//another way to connect which uses config/connectDB function
// const startServer = async () =>{
//     try{
//           await connectDB();
//           app.listen(PORT,()=>{
//             console.log(`Server is running on port number ${PORT}`);
//         });
        
//     } catch(error){
//        console.log(error);
//     }
// }
// startServer();
