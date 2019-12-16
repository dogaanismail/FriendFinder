import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsEducationComponent } from './settings-education/settings-education.component';
import { SettingsInformationComponent } from './settings-information/settings-information.component';
import { SettingsInterestComponent } from './settings-interest/settings-interest.component';
import { SettingsPasswordComponent } from './settings-password/settings-password.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { SettingsNavbarComponent } from './settings-navbar/settings-navbar.component';
import { SharedModule } from "../../shared/shared.module";
import { SettingsActivitiyComponent } from './settings-activitiy/settings-activitiy.component';

const settingsRoutes: Routes = [
    { path: "settings/information", component: SettingsInformationComponent },
    { path: "settings/account", component: SettingsAccountComponent },
    { path: "settings/education", component: SettingsEducationComponent },
    { path: "settings/interest", component: SettingsInterestComponent },
    { path: "settings/password", component: SettingsPasswordComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(settingsRoutes),
        SharedModule
    ],
    declarations: [
        SettingsAccountComponent,
        SettingsEducationComponent,
        SettingsInformationComponent,
        SettingsInterestComponent,
        SettingsPasswordComponent,
        SettingsMenuComponent,
        SettingsNavbarComponent,
        SettingsActivitiyComponent
    ]
})
export class SettingsModule { }
