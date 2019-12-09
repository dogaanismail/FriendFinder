import * as tslib_1 from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
let ModalComponent = class ModalComponent {
    constructor(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = el.nativeElement;
    }
    ngOnInit() {
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        document.body.appendChild(this.element);
        // close modal on background click
        this.element.addEventListener('click', el => {
            if (el.target.className === 'jw-modal') {
                this.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    }
    // remove self from modal service when component is destroyed
    ngOnDestroy() {
        this.modalService.remove(this.id);
        this.element.remove();
    }
    // open modal
    open() {
        this.element.style.display = 'block';
        document.body.classList.add('jw-modal-open');
    }
    // close modal
    close() {
        this.element.style.display = 'none';
        document.body.classList.remove('jw-modal-open');
    }
};
tslib_1.__decorate([
    Input()
], ModalComponent.prototype, "id", void 0);
ModalComponent = tslib_1.__decorate([
    Component({
        selector: 'jw-modal',
        templateUrl: 'modal.component.html',
        styleUrls: ['modal.component.less'],
        encapsulation: ViewEncapsulation.None
    })
], ModalComponent);
export { ModalComponent };
//# sourceMappingURL=modal.component.js.map