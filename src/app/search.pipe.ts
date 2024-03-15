import { Pipe, PipeTransform } from '@angular/core';
import { Note } from './interfaces/note';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allNotes:Note[], searchKey:string): Note[] {
    return allNotes.filter( (ele) => ele.title.toLowerCase().includes(searchKey.toLowerCase()))
  }

}
