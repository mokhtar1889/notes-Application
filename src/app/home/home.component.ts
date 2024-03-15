import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from '../interfaces/note';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  allNotes:Note[] =[] ;
  currentNote:Note = {} as Note ;
  searchKey:string = "" ;


  constructor(private _noteService:NoteService){}

  noteAddForm:FormGroup = new FormGroup({
    title:new FormControl(null),
    content:new FormControl(null)
  })

  EditeNoteForm:FormGroup = new FormGroup({
    title:new FormControl(null),
    content:new FormControl(null)
  })


  addNote(){
    this._noteService.addNotes(this.noteAddForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.getNotes()
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  getNotes(){
    this._noteService.getNotes().subscribe({
      next:(res)=>{
        console.log(res)
        this.allNotes = res.notes
        console.log(this.allNotes)
        
      }
    })
  }

  deleteNote(id:string){
    this._noteService.deleteNotes(id).subscribe({
        next:(res)=>{
          console.log(res)
            this.getNotes()    
            
        }
    })
  }

  editeNote(id:string){
    this._noteService.editNotes(id,this.EditeNoteForm.value).subscribe({
      next:(res)=>{
        console.log(res)
        this.getNotes()
      }
    })
  }

  getCurrentNote(currentNote:Note){
    this.currentNote = currentNote
  }


  ngOnInit(){  
    this.getNotes()
  }
}
