import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EmployeeServiceService} from './employee-service.service'
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AppRoutingModule } from './app-routing.module';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { SkillsComponent } from './skillmap/skillmap.component';
import { SkillsService } from './skills.service';
import { SkillupdateComponent } from './skillupdate/skillupdate.component';
import { SkillsearchComponent } from './skillsearch/skillsearch.component';
import { SkillviewsearchComponent } from './skillviewsearch/skillviewsearch.component';

import { MessagesComponent } from './messages/messages.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    SkillsComponent,
    SkillupdateComponent,
    SkillsearchComponent,
    SkillviewsearchComponent,
 
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeServiceService,SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
