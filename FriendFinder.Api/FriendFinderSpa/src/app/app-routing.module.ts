import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { TimelineComponent } from './components/timeline/timeline/timeline.component';
import { HomeComponent } from './components/video-conference/home/home.component';

const routes: Routes = [
  { path: '', component: TimelineComponent, pathMatch: 'full' },
  { path: "account/register", component: RegisterComponent },
  { path: "account/login", component: LoginComponent },
  { path: "video-conference/home", component: HomeComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
