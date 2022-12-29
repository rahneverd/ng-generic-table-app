import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, AfterContentInit {
  id
  dataForm
  dataArray
  keyArray
  dataObj
  constructor(private route: ActivatedRoute, private _data: DataService, private _fb: FormBuilder) {
    this.dataForm = this._fb.group(this._data.keyObj)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => this.id = parseInt(param.get('id')))
    this.keyArray = this._data.keyArray
    this.dataArray = this._data.dataArray
  
  }
  

  ngAfterContentInit()	{
  this.dataObj = this._data.dataArray[this.id]
  this.dataForm.setValue(this.dataObj)
  }

  updateObj(){
    this.dataArray[this.id] = this.dataForm.value
    this.dataForm.reset()
    this.dataForm.setValue(this.dataArray[this.id])
  }

  
  

}
