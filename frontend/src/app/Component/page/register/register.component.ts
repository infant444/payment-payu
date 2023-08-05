import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user/user.service';
import { User } from 'src/app/data/user/user';
import { passwordsMatchValidator } from 'src/app/data/user/validator/password_Validarot';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm!:FormGroup;
  isSubmit=false;
  returnurl='';
  constructor(private formbuilder:FormBuilder,private userservice:UserService,private router:Router,private activaterouter:ActivatedRoute){}

  ngOnInit(): void {
    this.RegisterForm=this.formbuilder.group({
      username:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(5)]],
      conformpassword:['',[Validators.required,Validators.minLength(5)]],

    }, {
      validators:passwordsMatchValidator('password','conformpassword')
    });

     this.returnurl=this.activaterouter.snapshot.queryParams.returnUrl;

  }

  get Fc(){
    return this.RegisterForm.controls;
  }

  submit(){
    this.isSubmit=true;
    if(this.RegisterForm.invalid){
      return;
    }
    const fv=this.RegisterForm.value;
    const newuser:User={
      id: '',
      username: fv.username,
      email: fv.email,
      password: fv.password,
      loginstatus: true,
      payment: '',
      paymenttype: '',
      date: ''
    }
    this.userservice.register(newuser).subscribe(_=>{
      this.router.navigateByUrl(this.returnurl);
    })

    console.log(fv.email);
  }
}
