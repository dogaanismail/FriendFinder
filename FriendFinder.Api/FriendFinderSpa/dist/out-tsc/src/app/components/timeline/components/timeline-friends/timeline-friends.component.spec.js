/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { TimelineFriendsComponent } from './timeline-friends.component';
describe('TimelineFriendsComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimelineFriendsComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineFriendsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline-friends.component.spec.js.map