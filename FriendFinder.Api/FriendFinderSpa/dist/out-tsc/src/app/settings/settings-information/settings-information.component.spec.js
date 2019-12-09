/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SettingsInformationComponent } from './settings-information.component';
describe('SettingsInformationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsInformationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsInformationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=settings-information.component.spec.js.map