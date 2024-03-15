import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:BehaviorSubject<any> = new BehaviorSubject('')

  constructor(private _httpClient:HttpClient){
    if(localStorage.getItem('NoteUserToken')){
      this.getUserData()
    }
  }

  register(data:object):Observable<any>{
    return this._httpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signUp',data)
  }

  logIn(data:object):Observable<any>{
    return this._httpClient.post('https://note-sigma-black.vercel.app/api/v1/users/signIn',data)
  }

  getUserData(){
    let token = JSON.stringify(localStorage.getItem('NoteUserToken'));
    let decodedToken = jwtDecode(token)
    console.log(decodedToken)
    this.userData.next(decodedToken)
    console.log(this.userData)
  }
}
