import { Store } from '@ngrx/store';

import { ConfigLoader } from '@bizappframework/ng-config';

import * as configActions from './config.actions';

export class ConfigNgrxStoreLoaderWrapper implements ConfigLoader {
    // tslint:disable-next-line:no-any
    constructor(private readonly _store: Store<any>, private readonly _configLoader: ConfigLoader) { }

    source(): string {
        return 'NgrxStoreLoader';
    }

    // tslint:disable-next-line:no-any
    async load(): Promise<{ [key: string]: any }> {
        this._store.dispatch(new configActions.Load(this._configLoader.source()));

        return this._configLoader.load()
            .then(data => {
                this._store.dispatch(new configActions.LoadSuccess(data));

                return data;
            });
    }
}
