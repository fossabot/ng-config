import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ConfigModule, ConfigLoader } from '@bizappframework/ng-config';
import { ConfigHttpLoader } from '@bizappframework/ng-config/http-loader';
import { ConfigNgrxStoreLoaderWrapper } from '@bizappframework/ng-config-ngrx-store';

 import { reducers, metaReducers } from './reducers';
import { AppComponent } from './app.component';

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
        StoreDevtoolsModule.instrument(),

        ConfigModule.forRoot({
            provide: ConfigLoader,
            useFactory: (configLoaderFactory),
            deps: [Store, HttpClient]
        })
    ],
    providers: []
})
export class AppModule { }

// config factory
export function configLoaderFactory(store: any, http: any): ConfigLoader {
    const originUrl = window.location.origin;
    const configHttpLoader = new ConfigHttpLoader(http, `${originUrl}/appsettings.json`);
    return new ConfigNgrxStoreLoaderWrapper(store, configHttpLoader);
}
