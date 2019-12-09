import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsAccountComponent } from './settings-account/settings-account.component';
import { SettingsEducationComponent } from './settings-education/settings-education.component';
import { SettingsInformationComponent } from './settings-information/settings-information.component';
import { SettingsInterestComponent } from './settings-interest/settings-interest.component';
import { SettingsPasswordComponent } from './settings-password/settings-password.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { SettingsNavbarComponent } from './settings-navbar/settings-navbar.component';
const settingsRoutes = [
    { path: "settings/information", component: SettingsInformationComponent },
    { path: "settings/account", component: SettingsAccountComponent },
    { path: "settings/education", component: SettingsEducationComponent },
    { path: "settings/interest", component: SettingsInterestComponent },
    { path: "settings/password", component: SettingsPasswordComponent },
];
let SettingsModule = class SettingsModule {
};
SettingsModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forChild(settingsRoutes),
        ],
        declarations: [
            SettingsAccountComponent,
            SettingsEducationComponent,
            SettingsInformationComponent,
            SettingsInterestComponent,
            SettingsPasswordComponent,
            SettingsMenuComponent,
            SettingsNavbarComponent
        ]
    })
], SettingsModule);
export { SettingsModule };
//# sourceMappingURL=setting.module.js.map