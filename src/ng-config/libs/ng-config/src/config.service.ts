import { Injectable } from '@angular/core';

import { ConfigLoader } from './config.loader';

@Injectable()
export class ConfigService {

    constructor(public loader: ConfigLoader) { }

    init(): Promise<any> {
        return this.loader.load();
    }

    getSettings(key?: string | Array<string>, defaultValue?: any): any {
        if (!key || (Array.isArray(key) && !key[0])) {
            return this.loader.getLoadedSettings();
        }

        const keyArray = Array.isArray(key) ? key : key.split(/\.|:/);

        let result = keyArray.reduce((acc: any, current: string) => acc && acc[current],
            this.loader.getLoadedSettings());

        if (result === undefined) {
            result = defaultValue;

            if (result === undefined) {
                throw new Error(`No setting found with the specified key [${keyArray.join('/')}]!`);
            }
        }

        return result;
    }
}
