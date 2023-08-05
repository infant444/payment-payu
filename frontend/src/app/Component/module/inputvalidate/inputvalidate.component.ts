import { Component,OnInit,Input, SimpleChanges, OnChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
const  Validators_Message:any={
  required:'*required',
  minlength:'Too short',
  email:'Invalid email',
  notMatch:'Not Same'
}
@Component({
  selector: 'app-inputvalidate',
  templateUrl: './inputvalidate.component.html',
  styleUrls: ['./inputvalidate.component.css']
})
export default class InputvalidateComponent implements OnInit,OnChanges{


  @Input()
  control!:AbstractControl;

  @Input()
  showErrorsWhen:boolean=true;
  errorMessages:string[]=[];


    constructor(){}
    ngOnChanges(changes: SimpleChanges): void {
     this.checkValidation();
    }
    ngOnInit(): void {
      this.control.statusChanges.subscribe(()=>{
        this.checkValidation();
      });
      this.control.valueChanges.subscribe(()=>{
        this.checkValidation();
      });
    }


    checkValidation(){
      const errors=this.control.errors;
      if(!errors){
        this.errorMessages=[];
        return;
      }

      const errorKey=Object.keys(errors);
      this.errorMessages=errorKey.map(Key=>Validators_Message[Key]);
    }
}
