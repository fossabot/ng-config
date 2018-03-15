import { InjectionToken } from '@angular/core';

export interface ConfigStaticData {
    [key: string]: any;
}

export const CONFIG_STATIC_DATA = new InjectionToken<ConfigStaticData>('CONFIG_STATIC_DATA');
