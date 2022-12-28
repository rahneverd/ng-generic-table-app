import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  keyArray= [
    {key: "first_name", name: "First Name"},
    {key: "last_name", name: "Last Name"},
    {key: "age", name: "Age"},
    {key: "angular", name: "Angular"}
  ]
  dataArray= [
    {first_name: "Muhammad", last_name: "Owais", age: 27, angular: "JS"},
    {first_name: "Muhammad", last_name: "Owais", age: 27, angular: "JS"},
    {first_name: "Muhammad", last_name: "Owais", age: 27, angular: "JS"},
    {first_name: "Muhammad", last_name: "Owais", age: 27, angular: "JS"},
    {first_name: "Muhammad", last_name: "Owais", age: 27, angular: "JS"},
  ]
  constructor() { }
}
