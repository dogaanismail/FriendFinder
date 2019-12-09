/* tslint:disable:no-unused-variable */
import { async, TestBed } from '@angular/core/testing';
import { ChatMessagesComponent } from './chat-messages.component';
describe('ChatMessagesComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ChatMessagesComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ChatMessagesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=chat-messages.component.spec.js.map