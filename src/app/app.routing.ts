import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { EmployeeComponent } from './employee/employee.component';
import { ProjectsComponent } from './projects/projects.component';
import { FinanceComponent } from './finance/finance.component';
import { LeaveComponent } from './leave/leave.component';
import { UserrolesComponent } from './userroles/userroles.component';
import { ReportsComponent } from './reports/reports.component';
import { MastersComponent } from './masters/masters.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =[
  { path: 'dashboard',      component: DashboardComponent },
	{ path: 'organisation',      component: OrganisationComponent },
	{ path: 'employee',      component: EmployeeComponent },
	{ path: 'projects',      component: ProjectsComponent },
	{ path: 'finance',      component: FinanceComponent },
	{ path: 'leave',      component: LeaveComponent },
	{ path: 'user-roles',      component: UserrolesComponent },
	{ path: 'reports',      component: ReportsComponent },
	{ path: 'masters',      component: MastersComponent },
	{ path: 'login', component: LoginComponent },
		//Root URL
	{ path: '',redirectTo: 'dashboard', pathMatch: 'full' }


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
