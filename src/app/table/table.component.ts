import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  keyArray = []
  dataArray = []
  cols: number
  rows: number
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.keyArray = this._data.keyArray
    this.dataArray = this._data.dataArray
    this.cols = this.keyArray.length 
    this.rows = this.dataArray.length + 1
  }

  consoleLog(i) {
    console.log(i)
  }

}
