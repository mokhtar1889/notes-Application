import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogedin:boolean = false 
  
  constructor( private _authService:AuthService , private _router:Router){}


  check(){
    this._authService.userData.subscribe({
      next:()=>{
        if(this._authService.userData.getValue()){
          this.isLogedin = true
        }else{
          this.isLogedin = false
        }
      }
    })
  }

  logout(){
    localStorage.removeItem('NoteUserToken');
    this._router.navigate(['login'])
    this.isLogedin = false
    this._authService.userData.next(null)
  }

  ngOnInit(){
    this.check()
  }

}
