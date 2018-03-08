import { Injectable } from '@angular/core';

import { ConfigLoader } from './config.loader';

@Injectable()
export class ConfigService {
    // tslint:disable-next-line:no-any
    private _cachedSettings: { [key: string]: any };

    constructor(public loader: ConfigLoader) { }

    // tslint:disable-next-line:no-any
    async load(): Promise<{ [key: string]: any }> {
        return this.loader.load()
            // tslint:disable-next-line:no-any
            .then((data: { [key: string]: any }) => this._cachedSettings = data);
    }

    getSettings<T>(key: string, defaultValue?: T): T;

    // tslint:disable-next-line:no-any
    getSettings(key?: string | string[], defaultValue?: any): any;

    // tslint:disable-next-line:no-any
    getSettings(key?: string | string[], defaultValue?: any): any {
        if (!this._cachedSettings || !key || (Array.isArray(key) && !key[0])) {
            return this._cachedSettings;
        }

        const keyArray = Array.isArray(key) ? key : key.split(/\.|:/);

        // tslint:disable-next-line:no-any
        let result = keyArray.reduce((acc: any, current: string) => acc && acc[current],
            this._cachedSettings);

        if (result === undefined) {
            result = defaultValue;
        }

        return result;
    }
}
