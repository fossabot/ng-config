import { Store } from '@ngrx/store';

import { ConfigLoader } from '@bizappframework/ng-config';

import { ConfigState } from './config-state.model';
import { CONFIG_INITIALIZE } from './config.actions';

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
        return this.configLoader.load()
            .then((data: { [key: string]: any; }) => {
                const source = this.configLoader.source();
                this.store.dispatch({
                    type: CONFIG_INITIALIZE,
                    payload: {
                        loaded: true,
                        data: data,
                        source: source
                    }
                });
                return data;
            });
    }
}
