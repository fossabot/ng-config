import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { CacheLocalStorageModule, CacheModule, MemoryCacheModule } from '@bizappframework/ng-cache';
import { ConfigModule, ConfigStaticLoaderModule } from '@bizappframework/ng-config';
import { ConfigCacheHttpLoaderModule } from '@bizappframework/ng-config-cache-http-loader';
import { ConfigNgrxStoreModule, configReducer } from '@bizappframework/ng-config-ngrx-store';

import { AppComponent } from './app.component';
import { metaReducers, reducers } from './reducers';

@NgModule({
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,

        // ngrx
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({
            // logOnly: environment.production // Restrict extension to log-only mode
        }),

        // cache
        CacheModule,
        MemoryCacheModule,
        CacheLocalStorageModule,

        // Config
        ConfigModule.loadWithAppInitializer(),
        ConfigStaticLoaderModule.forRoot({}),
        ConfigCacheHttpLoaderModule.forRoot({
            endpointUrl: getEndpointUrl,
            cacheConfigKey: 'app.config'
        }),
        ConfigNgrxStoreModule,
        StoreModule.forFeature('config', configReducer)
    ],
    providers: []
})
export class AppModule { }

export function getEndpointUrl(): string {
    return `${window.location.origin}/appsettings.json`;
}
