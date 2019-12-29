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

import { storageMetaReducer } from '../../core/store-infrastructure/storage-metareducer';
import { StoreLocalStorageService } from '../../core/store-infrastructure/store-local-storage.service';
import { StoreModule } from '@ngrx/store';
import * as fromReducer from '../../ngrx/reducers/user-account.reducer';
import { DETAILS_CONFIG_TOKEN, DETAILS_STORAGE_KEYS, DETAILS_LOCAL_STORAGE_KEY } from './user-details.tokens';

const settingsRoutes: Routes = [
    { path: "settings/account", component: SettingsHomeComponent },
    { path: "settings/notifications", component: SettingsHomeComponent },
    { path: "settings/interest", component: SettingsHomeComponent },
    { path: "settings/password", component: SettingsHomeComponent },
    { path: "settings/education", component: SettingsHomeComponent }
];

export function getUserDetailsConfig(saveKeys: string[], localStorageKey: string, storageService: StoreLocalStorageService) {
    return { metaReducers: [storageMetaReducer(saveKeys, localStorageKey, storageService)] };
}

@NgModule({
    imports: [
        RouterModule.forChild(settingsRoutes),
        SharedModule,
        StoreModule.forFeature('userDetails', fromReducer.userAccountReducer, DETAILS_CONFIG_TOKEN)
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
    ],
    providers: [
        StoreLocalStorageService,
        { provide: DETAILS_LOCAL_STORAGE_KEY, useValue: '__userDetails_storage__' },
        { provide: DETAILS_STORAGE_KEYS, useValue: ['userDetails'] },
        {
            provide: DETAILS_CONFIG_TOKEN,
            deps: [DETAILS_STORAGE_KEYS, DETAILS_LOCAL_STORAGE_KEY, StoreLocalStorageService],
            useFactory: getUserDetailsConfig
        },
    ]
})
export class SettingsModule { }
