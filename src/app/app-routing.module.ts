import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditModule } from './edit/edit.module';

const routes: Routes = [
  {path: 'edit', component: EditModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
