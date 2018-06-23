import { ModalEventsService } from '../services/modal-events.service';
import { NavParams, NavParamsToken, provideNavParamsInjectable } from './nav-params';
import { provideViewControllerInjectable, ViewController, ViewControllerToken } from './view-controller';
import { InjectionToken } from '@angular/core';

export function getProviders(GUID: string, params: { [key: string]: any }) {
    return [
        {
            provide: NavParamsToken, useValue: params
        }, {
            provide: NavParams, useFactory: provideNavParamsInjectable, deps: [NavParamsToken]
        }, {
            provide: ViewControllerToken, useValue: GUID
        }, {
            provide: ViewController, useFactory: provideViewControllerInjectable, deps: [ViewControllerToken, ModalEventsService]
        }
    ];
}