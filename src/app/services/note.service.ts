import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private _httpClient:HttpClient){}
  headers:any = {
    token:'3b8ny__'+localStorage.getItem('NoteUserToken')
  }

  addNotes(data:object):Observable<any>{
    return this._httpClient.post('https://note-sigma-black.vercel.app/api/v1/notes',data,{headers:this.headers})
  }

  getNotes():Observable<any>{
    return this._httpClient.get('https://note-sigma-black.vercel.app/api/v1/notes',{headers:this.headers})
  }

  deleteNotes(id:string):Observable<any>{
    return this._httpClient.delete(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,{headers:this.headers})
  }

  editNotes(id:string,data:object):Observable<any>{
    return this._httpClient.put(`https://note-sigma-black.vercel.app/api/v1/notes/${id}`,data,{headers:this.headers})
  }


}
