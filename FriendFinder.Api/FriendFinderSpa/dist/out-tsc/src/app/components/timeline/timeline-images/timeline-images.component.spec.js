/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { TimelineImagesComponent } from './timeline-images.component';
describe('TimelineImagesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TimelineImagesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(TimelineImagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=timeline-images.component.spec.js.map