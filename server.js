const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv=require("dotenv")
const path=require("path");
const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
const PORT=process.env.PORT||5000;



app.use("/api/user", userRoutes);
app.use(express.static(path.join(__dirname,'/netflix-ui/build')))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'netflix-ui','build','index.html'));
})
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("DB Connetion Successfull");
    app.listen(PORT, () => {
      console.log(`server started on port ${PORT}`);
    });
    
  })
  .catch((err) => {
    console.log(err.message);
  });
