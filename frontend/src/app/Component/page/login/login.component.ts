import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Service/user/user.service';
import { userLogin } from 'src/app/data/user/userlogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup;
  isSubmit=false;
  returnUrl='';



  constructor(private formbuilder:FormBuilder,private user:UserService,private activaterouter:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.loginForm=this.formbuilder.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,Validators.minLength(5)]]
    })

    this.returnUrl=this.activaterouter.snapshot.queryParams.returnUrl;
  }
  get Fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmit=true;
    if(this.loginForm.invalid){
      return;
    }
    const fv=this.loginForm.value;
    const x:userLogin={
      username:fv.username ,
      password: fv.password
    }
    this.user.login(x).subscribe(_=>{
      this.router.navigateByUrl(this.returnUrl);
    });
  }


}
