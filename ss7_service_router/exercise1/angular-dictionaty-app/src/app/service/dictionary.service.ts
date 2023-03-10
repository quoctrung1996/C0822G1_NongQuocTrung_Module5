import {Injectable} from '@angular/core';
import {IWord} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {id: 1, word: "one", mean: "Một"},
    {id: 2, word: "two", mean: "Hai"},
    {id: 3, word: "three", mean: "Ba"},
    {id: 4, word: "four", mean: "Bốn"},
    {id: 5, word: "five", mean: "Năm"},
  ]

  constructor() {
  }

  getAll() {
    return this.words;
  }
  findById(number:number):IWord|null{
    let temp=this.words.filter(data=>data.id===number);
    if (temp.length==0){
      return null;
    }
    return temp[0];
  }
}
