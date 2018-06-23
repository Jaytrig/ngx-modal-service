import { InjectionToken } from '@angular/core';

export const NavParamsToken = new InjectionToken('NavParamsToken');

export function provideNavParamsInjectable(params: { [key: string]: any }) {
    return new NavParams(params);
}

export class NavParams {
    constructor(public data: { [key: string]: any }) { }

    get(param: string): any {
        return this.data[param];
    }
}