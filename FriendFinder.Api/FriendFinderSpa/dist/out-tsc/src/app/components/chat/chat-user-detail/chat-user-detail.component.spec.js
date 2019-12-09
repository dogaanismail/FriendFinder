/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ChatUserDetailComponent } from './chat-user-detail.component';
describe('ChatUserDetailComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatUserDetailComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatUserDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-user-detail.component.spec.js.map