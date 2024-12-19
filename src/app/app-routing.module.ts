import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SampleComponent } from './sample/sample.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path:'landing', component: LandingComponent},
  { path: 'login', component: LoginComponent },
  { path: 'sample', component: SampleComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
