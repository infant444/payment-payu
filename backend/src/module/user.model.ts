
import {Schema, model} from 'mongoose';
import { Pay_method } from '../content/method';

export interface User{
    username:string;
    password: string;
   email:string;
   payment:string;
   paymenttype:Pay_method;
   loginstatus:boolean;
   
}

export const UserSchema = new Schema<User>({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    payment:{type: String},
    paymenttype:{type: String},
    username: {type: String, required: true,unique:true},
   loginstatus: {type: Boolean, required: true},
}, {
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});



export const UserModel = model<User>('user', UserSchema);