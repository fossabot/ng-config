import { Store } from '@ngrx/store';

import { ConfigLoader } from '@bizappframework/ng-config';

import { ConfigState } from './config-state.model';
import { ConfigInitialize } from './config.actions';

export class ConfigNgrxStoreLoaderWrapper implements  ConfigLoader {
    private cachedSettings: { [key: string]: any; } = {};

    constructor(private readonly store: Store<ConfigState>, private readonly configLoader: ConfigLoader) {
        if (!this.store) {
            throw new Error(`'Store<ConfigState>' service is not available.`);
        }
        if (!this.configLoader) {
            throw new Error(`'configLoader' service is not available.`);
        }
    }

    getType(): string {
        return 'ConfigNgrxStoreLoader';
    }

    load(): Promise<any> {
        return this.configLoader.load().then((data: { [key: string]: any; }) => {
            this.cachedSettings = Object.assign(this.cachedSettings, data);
            this.store.dispatch(new ConfigInitialize({
                loaded: true,
                data: data,
                source: this.configLoader.getType()
            }));
        });
    }

    getLoadedSettings(): { [key: string]: any; } {
        return this.cachedSettings;
    }
}
