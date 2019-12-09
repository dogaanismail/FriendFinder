/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ChatCreateMessageComponent } from './chat-create-message.component';
describe('ChatCreateMessageComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatCreateMessageComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatCreateMessageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-create-message.component.spec.js.map