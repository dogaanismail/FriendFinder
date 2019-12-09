/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ProfileAboutComponent } from './profile-about.component';
describe('ProfileAboutComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileAboutComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileAboutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-about.component.spec.js.map