import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  keyObj = {
    first_name : ['', [Validators.required, Validators.minLength(4)]],
    last_name: ['', [Validators.required, Validators.minLength(4)]],
    age: [, [Validators.min(2), Validators.required]],
    languages: ['', [Validators.required, Validators.minLength(3)]]
  }
  keyArray= [
    {key: "first_name", name: "First Name", type: "string"},
    {key: "last_name", name: "Last Name", type: "string"},
    {key: "age", name: "Age", type: "number"},
    {key: "languages", name: "Languages", type: "string"}
  ]
  dataArray= [
    {first_name: "Muhammad", last_name: "Owais", age: 27, languages: "Angular JS"},
    {last_name: "Owais", first_name: "Muhammad", age: 27, languages: "Node JS"},
    {first_name: "Muhammad", age: 27, languages: "Vue JS", last_name: "Owais"},
    {languages: "React JS", first_name: "Muhammad", last_name: "Owais", age: 27},
    {first_name: "Muhammad", last_name: "Owais", age: 27, languages: "Nest JS"},
  ]
  constructor() { }
}
