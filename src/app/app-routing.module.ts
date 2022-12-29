import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';

const routes: Routes = [
  {path: '', component: InputFormComponent},
  {path: 'edit/:id', loadChildren:()=>import('./edit/edit.module')
  .then(mod => mod.EditModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
