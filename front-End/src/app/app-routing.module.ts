import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import module or Components in routes
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
