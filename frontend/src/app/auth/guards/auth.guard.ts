import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/Service/user/user.service';
import { User } from 'src/app/data/user/user';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user!:User;
  constructor(private router: Router,private userservice:UserService) {
    this.userservice.userObeservable.subscribe((user)=>{
      this.user=user;
    })
  }

  canActivate(
    next: ActivatedRouteSnapshot,

    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.user.loginstatus) {
      return true;
    }
    else {
      return this.router.navigate(['/login'], {queryParams:{returnUrl:state.url}});
      return false;
    }
  }
}
