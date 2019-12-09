/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { SettingsEducationComponent } from './settings-education.component';
describe('SettingsEducationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SettingsEducationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(SettingsEducationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=settings-education.component.spec.js.map