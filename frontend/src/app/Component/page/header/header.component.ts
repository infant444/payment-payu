import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Service/user/user.service';
import { User } from 'src/app/data/user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user!:User;

  constructor(private router:Router,private userservice:UserService){}
  ngOnInit(): void {
    this.userservice.userObeservable.subscribe((user)=>{
      this.user=user;
      console.log(this.user);
    })
  }

login(){
  this.router.navigateByUrl('/login');

}
payment(){
  this.router.navigateByUrl('/payment');
}
logout(){
  this.userservice.logoutx(this.user.id).subscribe(()=>{
    this.userservice.logout();
  })
}
}
