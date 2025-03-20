import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default home route
  { path: 'about', component: AboutComponent }  // Profile page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Ensure forRoot() is used
  exports: [RouterModule]
})
export class AppRoutingModule { }