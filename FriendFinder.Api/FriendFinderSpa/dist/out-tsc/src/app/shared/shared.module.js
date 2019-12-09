import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEditorModule } from 'ngx-editor';
import { FileUploadModule } from 'ng2-file-upload';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from '../common/components/modal/modal.component';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule
        ],
        exports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            FormsModule,
            ReactiveFormsModule,
            NgxEditorModule,
            FileUploadModule,
            OrderModule,
            BrowserAnimationsModule,
            ModalComponent
        ],
        declarations: [
            ModalComponent
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map