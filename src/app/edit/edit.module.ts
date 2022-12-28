import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [EditComponent, DeleteComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
