import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import module or Components in routes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent} from './components/dashboard/dashboard.component'
import { PatientsComponent } from './components/patients/patients.component';
import { NotesComponent } from './components/notes/notes.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ingreso', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pacientes', component:  PatientsComponent},
    {path: 'notas', component:  NotesComponent},
    {path: '404', component: Page404Component},
    {path: '**', redirectTo: '404', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
