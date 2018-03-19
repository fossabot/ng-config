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
        store: Store<any>,
        configService: ConfigService) {
        if (parentModule) {
            throw new Error('ConfigNgrxStoreModule has already been loaded, import in root module only.');
        }

        configService.loadEvent
            .subscribe((evt) => {
                if (evt.loading && evt.source && !evt.loaderLoaded) {
                    store.dispatch(new configActions.Load(evt.source));
                } else if (evt.loading && evt.source && evt.loaderLoaded) {
                    store.dispatch(new configActions.LoaderLoaded({
                        data: evt.loaderLoadedData || {},
                        source: evt.source
                    }));
                } else if (evt.loaded) {
                    store.dispatch(new configActions.LoadSuccess({
                        data: evt.data,
                        source: evt.source
                    }));
                }
            });
    }
}
