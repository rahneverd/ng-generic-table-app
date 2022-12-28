import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
