// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EditdetailsComponent } from './editdetails/editdetails.component';
import { PopComponent } from './pop/pop.component';
import { ContainerComponent } from './container/container.component';
import { Home1Component } from './home1/home1.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { EmployeeDetailComponent } from './employeedetails/employeedetails.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { MyTeamComponent } from './my-team/my-team.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AdminComponent } from './admin/admin.component';
import { ReportComponent } from './report/report.component';
import { HistoryComponent } from './history/history.component';
import { ReportsComponent } from './reports/reports.component';
import { ActiveComponent } from './active/active.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path: "admin",component: AdminComponent,
  children:[
    { path: 'report', component: ReportComponent },
    { path: 'editdetails/:id', component: EditdetailsComponent },
    { path: 'my-team', component: MyTeamComponent },
    { path: 'details', component: EmployeeDetailsComponent },
    { path: 'pop', component: PopComponent },
    { path: '', component: Home1Component },
    { path: 'details/:empid', component: EmployeeDetailComponent },
    { path: 'searchbar', component: SearchbarComponent },
    { path: 'employeedetails', component: EmployeeDetailComponent },
    { path: 'employee-details', component: EmployeeDetailsComponent },
    { path: 'mydetails', component: MydetailsComponent },
    { path: 'hist', component: HistoryComponent },
    {path:'side-nav', component:SideNavComponent},
    { path: 'reports', component: ReportsComponent },

    { path: 'active', component: ActiveComponent },

    { path: 'active/:id', component: ActiveComponent },
  ] },
  { path: '**', redirectTo: 'login' }, // Redirect to login page for unknown routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
