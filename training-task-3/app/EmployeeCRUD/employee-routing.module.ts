import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeCRUDComponent } from './Employee-crud.component';

const routes: Routes = [
  {path: '', component: EmployeeCRUDComponent, children: [
    
  {path:'add',component:AddComponent},
  {path:'edit',component:EditComponent},
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
