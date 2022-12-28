import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DeleteComponent } from "./delete/delete.component";
import { EditComponent } from "./edit/edit.component";

const routes: Routes = [
  {path: 'edit', component: EditComponent},
  {path: 'delete', component: DeleteComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule {}