import { InjectionToken } from '@angular/core';

export interface ConfigLoader {
    readonly source: string;
    load(): Promise<{ [key: string]: any }>;
}

export const CONFIG_LOADER = new InjectionToken<ConfigLoader>('CONFIG_LOADER');
