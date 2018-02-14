import { Store } from '@ngrx/store';

import { ConfigLoader } from '@bizappframework/ng-config';

import { ConfigState } from './config-state';
import * as configActions from './config.actions';

export class ConfigNgrxStoreLoaderWrapper implements ConfigLoader {
    constructor(private readonly _store: Store<ConfigState>, private readonly _configLoader: ConfigLoader) {
        if (!this._store) {
            throw new Error(`'Store<ConfigState>' service is not available.`);
        }
        if (!this._configLoader) {
            throw new Error(`'configLoader' service is not available.`);
        }
    }

    source(): string {
        return 'ConfigNgrxStoreLoader';
    }

    load(): Promise<{ [key: string]: any }> {
        return this._configLoader.load()
            .then((data: { [key: string]: any; }) => {
                const source = this._configLoader.source();
                const action = new configActions.Load({
                    data: data,
                    loaded: true,
                    source: source
                });
                this._store.dispatch(action);
                return data;
            });
    }
}
