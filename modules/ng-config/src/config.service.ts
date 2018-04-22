import { Inject, Injectable, Optional } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { CONFIG_LOADER, ConfigLoader } from './config-loader';

export interface ConfigLoadingContext {
    // tslint:disable-next-line:no-any
    data: { [key: string]: any };
    source: string;
    loadedSources: string[];
    loading: boolean;
    loaded: boolean;

    loaderLoading?: boolean;
    loaderLoaded?: boolean;
    // tslint:disable-next-line:no-any
    loaderLoadedData?: { [key: string]: any } | null;
}

@Injectable()
export class ConfigService {
    readonly loadEvent: Observable<ConfigLoadingContext>;

    // tslint:disable-next-line:no-any
    private _cachedSettings: { [key: string]: any } = {};
    private _loadedSources: string[] = [];
    private _onLoad = new Subject<ConfigLoadingContext>();

    constructor(@Optional() @Inject(CONFIG_LOADER) private readonly _configLoaders?: ConfigLoader[]) {
        this.loadEvent = this._onLoad.asObservable();
    }

    // tslint:disable-next-line:no-any
    async load(): Promise<{ [key: string]: any }> {
        if (this._configLoaders && this._configLoaders.length) {
            for (const loader of this._configLoaders) {
                if (loader.source && this._loadedSources.includes(loader.source)) {
                    continue;
                }

                this._onLoad.next({
                    data: this._cachedSettings,
                    loadedSources: this._loadedSources.slice(0),
                    source: loader.source,
                    loaderLoading: true,
                    loaderLoaded: false,
                    loading: true,
                    loaded: false
                });

                const data = await loader.load();

                this._cachedSettings = { ...this._cachedSettings, ...data };
                this._loadedSources.push(loader.source);

                this._onLoad.next({
                    data: this._cachedSettings,
                    loadedSources: this._loadedSources.slice(0),
                    source: loader.source,
                    loaderLoading: false,
                    loaderLoaded: true,
                    loaderLoadedData: { ...data },
                    loading: true,
                    loaded: false
                });
            }
        }

        this._onLoad.next({
            data: this._cachedSettings,
            loadedSources: this._loadedSources.slice(0),
            source: this._loadedSources.join(', '),
            loading: false,
            loaded: true
        });

        return this._cachedSettings;
    }

    getSettings<T>(key: string, defaultValue?: T): T;

    // tslint:disable-next-line:no-any
    getSettings(key?: string | string[], defaultValue?: any): any;

    // tslint:disable-next-line:no-any
    getSettings(key?: string | string[], defaultValue?: any): any {
        if (!key || (Array.isArray(key) && !key[0])) {
            return this._cachedSettings;
        }

        const keyArray = Array.isArray(key) ? key : key.split(/\.|:/);

        // tslint:disable-next-line:no-any
        let result = keyArray.reduce((acc: any, current: string) => acc && acc[current],
            this._cachedSettings);

        if (result === undefined) {
            result = defaultValue;
        }

        return result;
    }
}
