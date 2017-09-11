import { Store } from '@ngrx/store';

import { ConfigLoader } from '@bizappframework/ng-config';

import { ConfigState } from './config-state.model';
import { ConfigInitialize } from './config.actions';

export class ConfigNgrxStoreLoaderWrapper implements ConfigLoader {

    constructor(private readonly store: Store<ConfigState>, private readonly configLoader: ConfigLoader) {
        if (!this.store) {
            throw new Error(`'Store<ConfigState>' service is not available.`);
        }
        if (!this.configLoader) {
            throw new Error(`'configLoader' service is not available.`);
        }
    }

    source(): string {
        return 'ConfigNgrxStoreLoader';
    }

    load(): Promise<any> {
        return this.configLoader.load().then((data: { [key: string]: any; }) => {
            this.store.dispatch(new ConfigInitialize({
                loaded: true,
                data: data,
                source: this.configLoader.source()
            }));
            return data;
        });
    }
}
