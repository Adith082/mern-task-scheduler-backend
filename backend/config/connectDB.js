const mongoose = require("mongoose");

connectDB = async () => {
     try {
         const connect = await mongoose.connect(process.env.MONGO_URI);
         console.log(`Mongo DB Connected `);
     } catch(error){
         console.log(error);
         process.exit(1);
     }
};

module.exports = connectDB;



//normally mongo age connect howa valo then server 