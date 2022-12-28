import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: '', component: InputFormComponent},
  {path: '', component: TableComponent, outlet: 'table'},
  {path: 'admin', loadChildren:()=>import('./edit/edit.module')
  .then(mod => mod.EditModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
