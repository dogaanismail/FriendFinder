/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { CreatepostComponent } from './createpost.component';
describe('CreatepostComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CreatepostComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(CreatepostComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=createpost.component.spec.js.map