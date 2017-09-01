import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Store } from '@ngrx/store';

import { ConfigLoader } from '@bizappframework/ng-config';
import { ConfigHttpLoader } from '@bizappframework/ng-config-http-loader';
import { ConfigNgrxStoreLoaderWrapper } from '@bizappframework/ng-config-ngrx-store';

// app components/modules etc
import { AppSharedModule, appId } from './app.shared.module';
import { AppComponent } from './app.component';

// factories
export function getOriginUrl(): string {
    return window.location.origin;
}

export function getRequest(): any {
    // the Request object only lives on the server
    return { cookie: document.cookie };
}

export function configLoaderFactory(store: any, http: any): ConfigLoader {
    const originUrl = window.location.origin;
    const configHttpLoader = new ConfigHttpLoader(http, `${originUrl}/appsettings.json`);
    return new ConfigNgrxStoreLoaderWrapper(store, configHttpLoader);
}

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule.withServerTransition({
            appId: appId // make sure this matches with your Server NgModule
        }),
        BrowserAnimationsModule,

        AppSharedModule
    ],
    providers: [
        {
            provide: ConfigLoader,
            useFactory: (configLoaderFactory),
            deps: [Store, Http]
        }
    ]
})
export class AppModule { }
