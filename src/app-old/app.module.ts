import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectsComponent } from './projects/projects.component';
import { FinanceComponent } from './finance/finance.component';
import { LeaveComponent } from './leave/leave.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { ReportsComponent } from './reports/reports.component';
import { MastersComponent } from './masters/masters.component';
import { NewcComponent } from './newc/newc.component';
import { LoginComponent } from './login/login.component';
import { SharedComponent } from './components/shared/shared.component';
import { SharedModule } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OrganisationComponent,
    EmployeeComponent,
    ProjectsComponent,
    FinanceComponent,
    LeaveComponent,
    UserrolesComponent,
    ReportsComponent,
    MastersComponent,
    NewcComponent,
    LoginComponent,
    SharedComponent,
      ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
