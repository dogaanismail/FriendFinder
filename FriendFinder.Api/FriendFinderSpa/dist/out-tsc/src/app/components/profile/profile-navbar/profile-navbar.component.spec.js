/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ProfileNavbarComponent } from './profile-navbar.component';
describe('ProfileNavbarComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfileNavbarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ProfileNavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-navbar.component.spec.js.map