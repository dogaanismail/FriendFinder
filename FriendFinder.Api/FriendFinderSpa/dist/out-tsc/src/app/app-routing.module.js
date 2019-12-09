import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/account/register/register.component';
import { LoginComponent } from './components/account/login/login.component';
import { TimelineComponent } from './components/timeline/timeline/timeline.component';
import { HomeComponent } from './components/video-conference/home/home.component';
const routes = [
    { path: '', component: TimelineComponent, pathMatch: 'full' },
    { path: "account/register", component: RegisterComponent },
    { path: "account/login", component: LoginComponent },
    { path: "video-conference/home", component: HomeComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map