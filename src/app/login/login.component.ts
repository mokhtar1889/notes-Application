import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading:boolean = false ;
  constructor(private _authService:AuthService  ,private _route:Router){}

  loginForm:FormGroup = new FormGroup({
    email : new FormControl("" , [Validators.required]),
    password : new FormControl("",[Validators.required])
  })

  logIn(){
    this.isLoading = true 
    
    if(this.loginForm.valid){
      this._authService.logIn(this.loginForm.value).subscribe({
        next:(res)=>{
          // console.log(res)
          this.isLoading = false 
          localStorage.setItem("NoteUserToken",res.token);
          this._authService.getUserData();
          this._route.navigate(['home'])
        },
        error:()=>{
          this.isLoading = false 
        }
      })
    }
  }
}
