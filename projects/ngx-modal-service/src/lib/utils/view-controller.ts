import { InjectionToken } from '@angular/core';

import { ModalEventsService } from '../services/modal-events.service';

export const ViewControllerToken = new InjectionToken('ViewControllerToken');

export const provideViewControllerInjectable = (GUID: string, ModalEventsService: ModalEventsService) => {
    return new ViewController(GUID, ModalEventsService);
};

export class ViewController {
    constructor(public GUID, private ModalEvents: ModalEventsService) { }

    dismiss(data = {}) {
        this.ModalEvents.dismiss(this.GUID, data);
    }
}