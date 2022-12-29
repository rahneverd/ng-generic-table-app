import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  keyArray
  dataArray
  constructor(private _data: DataService, private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.keyArray = this._data.keyArray
    this.dataArray = this._data.dataArray

  }

  dataForm = this._fb.group(this._data.keyObj)

  onSubmit() {
    this.dataArray.push(this.dataForm.value)
    this.dataForm.reset()
  }

}
