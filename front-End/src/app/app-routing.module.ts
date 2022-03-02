import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import module or Components in routes
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { DashboardComponent} from './components/dashboard/dashboard.component'
import { MedicineComponent } from './components/medicine/medicine.component'

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ingreso', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'medicamento', component: MedicineComponent},
    {path: '404', component: Page404Component},
    {path: '**', redirectTo: '404', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
