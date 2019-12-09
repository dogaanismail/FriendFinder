/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { TimelineSidebarComponent } from './timeline-sidebar.component';
describe('TimelineSidebarComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimelineSidebarComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline-sidebar.component.spec.js.map