import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { GETUSER, LOGIN, LOGOUT, PAYMENT, REGISTER,  } from 'src/app/data/constant/url';
import { User } from 'src/app/data/user/user';
import { userLogin } from 'src/app/data/user/userlogin';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userSubject = new BehaviorSubject<User>(this.getUserLocalStorage());
   public userObeservable: Observable<User>;

  constructor(private Http:HttpClient,private toastr:ToastrService) {
    this.userObeservable = this.userSubject.asObservable();
   }
  register(user:User):Observable<User>{
    return this.Http.post<User>(REGISTER,user).pipe(
      tap({
        next:(user)=>{
          this.userSubject.next(user);
          console.log(user);
          this.toastr.success(` ${user.username} !`,'Rrgister Successfully');
          this.setUserToLocalStorage(user);
        },
        error:(Errores)=>{
          this.toastr.error("Register Failed");
        }

      })
    );

  }
  login(user:userLogin):Observable<User>{
    return this.Http.post<User>(LOGIN,user).pipe(
      tap({
        next:(user)=>{
          this.userSubject.next(user);
          console.log(user);
          this.toastr.success(` ${user.username} !`,'Login Successfully');
          this.setUserToLocalStorage(user);
        },
        error:(Errores)=>{
          this.toastr.error("Login Failed");
        }

      })
    );

  }

  payment(id:string,paydet:any):Observable<User>{
    return this.Http.put<User>(PAYMENT+id,paydet);
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem('User');

    window.location.reload();
  }

logoutx(id:string){
  return this.Http.get(LOGOUT+id,);
}
getuser(id:string):Observable<User>{
  return this.Http.get<User>(GETUSER+id);
}

  public get currentUser():User{
    return this.userSubject.value;
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem('User', JSON.stringify(user));
  }



  private getUserLocalStorage(): User {
    const x = localStorage.getItem('User');
    if (x) {
      return JSON.parse(x);
    }
    else {
      return new User();
    }
  }
}
