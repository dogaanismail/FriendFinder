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
import { SettingsHomeComponent } from './settings-home/settings-home.component';

const settingsRoutes: Routes = [
    { path: "settings/account", component: SettingsHomeComponent },
    { path: "settings/notifications", component: SettingsHomeComponent },
    { path: "settings/interest", component: SettingsHomeComponent },
    { path: "settings/password", component: SettingsHomeComponent },
    { path: "settings/education", component: SettingsHomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(settingsRoutes),
        SharedModule,
    ],
    declarations: [
        SettingsAccountComponent,
        SettingsEducationComponent,
        SettingsInformationComponent,
        SettingsInterestComponent,
        SettingsPasswordComponent,
        SettingsMenuComponent,
        SettingsNavbarComponent,
        SettingsActivitiyComponent,
        SettingsHomeComponent
    ]
})
export class SettingsModule { }
