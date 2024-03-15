import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './interfaces/note';

@Pipe({
  name: 'note'
})
export class NotePipe implements PipeTransform {

  transform(notes: Note[], id:string){
    return notes.filter((note) => note._id === id) ;
  }

}
