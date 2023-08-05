import { environment } from "src/environment/environment.pord";

const BASE_URL=environment.production?'':'http://localhost:5000';

export const REGISTER=BASE_URL+"/api/user/register";
export const LOGIN=BASE_URL+"/api/user/login";
export const PAYMENT=BASE_URL+"/api/user/payment/";
export const LOGOUT=BASE_URL+"/api/user/logout/";
export const GETUSER=BASE_URL+"/api/user/getuser/";




