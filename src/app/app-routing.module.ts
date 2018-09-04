import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddEmployeeComponent} from './add-employee/add-employee.component';
import {RouterModule,Routes} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { AppComponent} from './app.component';
import{SkillsComponent} from './skillmap/skillmap.component';
import{SkillupdateComponent} from './skillupdate/skillupdate.component';
import{SkillviewsearchComponent} from './skillviewsearch/skillviewsearch.component';

const routes:Routes= [
  { path: 'register', component: RegisterComponent },
  { path: 'viewemployee', component:AddEmployeeComponent},
  { path: 'update/:employeeid', component:UpdateEmployeeComponent},
  { path: 'skillmap',component:SkillsComponent},
  { path: 'skillmap.component',component:SkillupdateComponent},
  { path: 'details/:employeeid',component:SkillupdateComponent},
  { path: 'views/:skillType', component:SkillviewsearchComponent},

  ];


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
