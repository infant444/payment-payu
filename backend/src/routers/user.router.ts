import Router from 'express';
import asynchandler from 'express-async-handler';
import { User, UserModel } from '../module/user.model';
import { BAD_STATUS } from '../content/status';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Pay_method } from '../content/method';

const router=Router();

 const genarateTockenResponse=(user:any)=>{
    const token=jwt.sign({
        id:user.id,username:user.username
    },process.env.JWT_SECRET!,{
    })

    return {
        id: user.id,
        email: user.email,
        username: user.username,
        loginstatus:user.loginstatus,
        payment: user.payment,
        paymenttype: user.paymenttype,
        date: user.date,
        token: token,
      };
}

router.post("/register",asynchandler(
    async(req,res)=>{
        const{email,username,password}=req.body;

        const user=await UserModel.findOne({username});
        if(user){
            console.log(user);
            res.status(BAD_STATUS).send("Username already exit");
            return;
        }
        const user1=await UserModel.findOne({email});
        
        if(user1){
            console.log(user);
            res.status(BAD_STATUS).send("Already login");
            return;
        }
        const x:User={
            email: email,
            username: username,
            password: await bcrypt.hash(password, 10),
            loginstatus: true,
            payment: '',
            paymenttype: Pay_method.NONE,
        }
        console.log(x);
        const newuser=await UserModel.create(x);
        // const newuser=new usermodel(x);
        // await newuser.save();
        res.send(newuser);

    }
))

router.post('/login',asynchandler(
    async(req,res)=>{
        console.log('x');
        const {username,password}=req.body;
        console.log(username,password);
        const user=await UserModel.findOne({username});
        if(user && (await bcrypt.compare(password, user.password)))
        {
            const userx=await UserModel.findByIdAndUpdate(user.id,{loginstatus: true});
            const user1=await UserModel.findOne({username});


            res.send(user1);
        }
        else
        {
            res.status(BAD_STATUS).send("Username and pasword is inValid");
        }
    }
))

router.put('/payment/:userid',asynchandler(
    async(req,res)=>{
        var x;
        const {payment}=req.body;
        if(parseInt(payment)==1700){
            x=Pay_method.BASIC;
        }
        else if(parseInt(payment)==2500){
            x=Pay_method.STANDEND;
        }
        else{
            x=Pay_method.PREMIUM;
        }

        const user=await UserModel.findByIdAndUpdate(req.params.userid,{payment:payment,paymenttype:x});
        res.send(user);
    }
))


router.get('/logout/:userid',asynchandler(
    async(req,res)=>{
            const user=await UserModel.findByIdAndUpdate(req.params.userid,{loginstatus: false});
            res.send(user);
    }
    ))

router.get('/getuser/:id',asynchandler(
    async(req,res)=>{
        const user=await UserModel.findById(req.params.id);
        res.send(user);
    }
))
export default router;