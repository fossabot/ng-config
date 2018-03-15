import { Inject, Injectable, Optional } from '@angular/core';

import { ConfigLoader } from './config-loader';
import { CONFIG_STATIC_DATA, ConfigStaticData } from './config-static-data';

@Injectable()
export class ConfigStaticLoader implements ConfigLoader {
    readonly settings: ConfigStaticData = {};

    constructor(@Optional() @Inject(CONFIG_STATIC_DATA) settings: ConfigStaticData) {
        if (settings) {
            this.settings = settings;
        }
    }

    get source(): string {
        return 'StaticLoader';
    }

    async load(): Promise<{ [key: string]: any }> {
        return Promise.resolve(this.settings);
    }
}
