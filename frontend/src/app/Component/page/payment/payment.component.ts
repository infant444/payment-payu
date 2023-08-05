import { Component } from '@angular/core';
import { UserService } from 'src/app/Service/user/user.service';
import { User } from 'src/app/data/user/user';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  user!: User;
  user1!: User;

  constructor(private userservice: UserService) {
    this.userservice.userObeservable.subscribe((user) => {
      this.user = user;
      console.log(user.id);
    })

    if(this.user){
      this.userservice.getuser(this.user.id).subscribe((user)=>{
        this.user1 = user;
        console.log(this.user);
      })
    }
  }
  base() {
    const paydet: any = {
      payment: 1700
    }
    this.userservice.payment(this.user.id, paydet).subscribe(
      (user) => {
        window.location.href = 'https://pmny.in/iJN3eaHb4EGH';
      }
    )


  }
  standed() {
    const paydet: any = {
      payment: 2550
    }
    this.userservice.payment(this.user.id, paydet).subscribe(
      (user) => {
        window.location.href = 'https://pmny.in/Irl0FPYQ26JT';

      }
    )
  }
  primum() {
    const paydet: any = {
      payment: 2750
    }
    this.userservice.payment(this.user.id, paydet).subscribe(
      (user) => {
        window.location.href = 'https://pmny.in/Irl0FPYQ26JT';
      }
    )
  }

}
