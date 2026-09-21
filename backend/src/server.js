import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import employeeRoutes from "./routes/employeeRoutes.js";
import cors from "cors";
// import dns from "dns"
// dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json())


app.get("/api/health",(req , res) =>{
    res.json({success : true , message : "API is running healthy..."})
})

app.use("/api/employees" , employeeRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT , "0.0.0.0",() =>{
    console.log(`Server is running on PORT ${PORT}`);    
});



