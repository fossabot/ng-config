import { Injectable } from '@angular/core';

import { ConfigLoader } from './config.loader';

@Injectable()
export class ConfigService {
    private settings: { [key: string]: any };

    constructor(public loader: ConfigLoader) { }

    init(): Promise<any> {
        return this.loader.loadSettings()
            .then((res: { [key: string]: any }) => this.settings = res);
    }

    initSync(): void {
        this.settings = this.loader.loadSettingsSync();
    }

    getSettings(key?: string | Array<string>, defaultValue?: any): any {
        if (!key || (Array.isArray(key) && !key[0])) {
            return this.settings;
        }

        const keyArray = Array.isArray(key) ? key : key.split('.');

        let result = keyArray.reduce((acc: any, current: string) => acc && acc[current], this.settings);

        if (result === undefined) {
            result = defaultValue;

            if (result === undefined) {
                throw new Error(`No setting found with the specified key [${keyArray.join('/')}]!`);
            }
        }

        return result;
    }

    get currentSettings(): { [key: string]: any } {
        return this.settings;
    }
}
