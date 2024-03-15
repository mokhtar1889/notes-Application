import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false ;

  constructor(private _authService:AuthService){}

  registerForm:FormGroup = new FormGroup({
    name : new FormControl("",[Validators.required]) ,
    email : new FormControl("",[Validators.email]),
    password :new FormControl("",[Validators.required]),
    age : new FormControl("",[Validators.required]),
    phone : new FormControl("",[Validators.required])
  })


  register(){

    this.isLoading = true
    
    if(this.registerForm.valid){
      this._authService.register(this.registerForm.value).subscribe({
        next:(res)=>{
          console.log(res)
          this.isLoading = false
        },
        error:()=>{
          this.isLoading = false
        }
      })
    }  
  }
}
