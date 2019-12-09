/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ProfileActivityComponent } from './profile-activity.component';
describe('ProfileActivityComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileActivityComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileActivityComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-activity.component.spec.js.map