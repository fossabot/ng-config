import { NgModule, Optional, SkipSelf } from '@angular/core';

import { ConfigService } from '@bizappframework/ng-config';
import { Store, StoreModule } from '@ngrx/store';

import * as configActions from './config.actions';
import { configReducer } from './config.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('config', configReducer)
    ]
})
export class ConfigNgrxStoreModule {
    constructor(@Optional() @SkipSelf() parentModule: ConfigNgrxStoreModule,
        // tslint:disable-next-line:no-any
        private readonly _store: Store<any>,
        private readonly _ConfigService: ConfigService) {
        if (parentModule) {
            throw new Error('ConfigNgrxStoreModule has already been loaded, import in root module only.');
        }
        this._ConfigService.loadEvent
            .subscribe((evt) => {
                if (evt.loading && evt.source && !evt.loaderLoaded) {
                    this._store.dispatch(new configActions.Load(evt.source));
                } else if (evt.loading && evt.source && evt.loaderLoaded) {
                    this._store.dispatch(new configActions.LoaderLoaded({
                        data: evt.loaderLoadedData || {},
                        source: evt.source
                    }));
                } else if (evt.loaded) {
                    this._store.dispatch(new configActions.LoadSuccess({
                        data: evt.data,
                        source: evt.source
                    }));
                }
            });
    }
}
