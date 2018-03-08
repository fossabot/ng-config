import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ConfigLoader, ConfigModule } from '@bizappframework/ng-config';
import { ConfigNgrxStoreLoaderWrapper, configReducer } from '@bizappframework/ng-config-ngrx-store';
import { ConfigHttpLoader } from '@bizappframework/ng-config/http-loader';

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
        StoreModule.forFeature('config', configReducer),

        // Instrumentation must be imported after importing StoreModule (config is optional)
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            // logOnly: environment.production // Restrict extension to log-only mode
        }),

        ConfigModule.forRoot({
            provide: ConfigLoader,
            useFactory: (configLoaderFactory),
            deps: [Store, HttpClient]
        })
    ],
    providers: []
})
export class AppModule { }

// tslint:disable-next-line:no-any
export function configLoaderFactory(store: Store<any>, http: HttpClient): ConfigLoader {
    const originUrl = window.location.origin;
    const configHttpLoader = new ConfigHttpLoader(http, `${originUrl}/appsettings.json`);

    return new ConfigNgrxStoreLoaderWrapper(store, configHttpLoader);
}
