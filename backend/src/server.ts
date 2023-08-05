import dotenv from 'dotenv';

dotenv.config();


import express from 'express';
import cors from 'cors';
import { dbconnect } from './config/database.config';
import UserRouter from './routers/user.router';


dbconnect();

const app=express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))


 app.use('/api/user',UserRouter);


const Port=process.env.PORT||5000;
app.listen(Port,()=>{
    console.log("http://localhost:"+Port);
})