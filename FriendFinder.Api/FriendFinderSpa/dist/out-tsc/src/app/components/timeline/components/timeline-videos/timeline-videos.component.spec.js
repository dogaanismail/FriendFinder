/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { TimelineVideosComponent } from './timeline-videos.component';
describe('TimelineVideosComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimelineVideosComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineVideosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline-videos.component.spec.js.map