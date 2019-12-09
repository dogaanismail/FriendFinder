/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { TimelineNearbyComponent } from './timeline-nearby.component';
describe('TimelineNearbyComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimelineNearbyComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineNearbyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline-nearby.component.spec.js.map