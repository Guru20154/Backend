import dotenv from "dotenv"; 
import connectDB from "./db/index.js";
import {app} from './app.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.on("error",(error)=>{
        console.log("MONGO ERROR: ", error)
        throw error
    })
    app.listen(process.env.PORT || 4000,()=>{
        console.log(`Listening on port: ${process.env.PORT}`)
    })
})
.catch((err) =>{
    console.log("MONGO DB connection failed: ", err)
})









// first way to connect db
// import express from "express";
// const app = express()
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on: ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.log("ERROR: ",error)
//     }
// })()