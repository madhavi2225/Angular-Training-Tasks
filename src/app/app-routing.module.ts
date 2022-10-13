import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './EmployeeCRUD/add/add.component';
import { EmployeeCRUDComponent } from './EmployeeCRUD/Employee-crud.component';


const routes: Routes = [
  {path:'EmployeeCRUD', loadChildren: () => import(`./EmployeeCRUD/employee.module`).then(m => m.EmployeeModule)},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
exports: [RouterModule]
})
export class AppRoutingModule { }

