import { HttpClient, HttpResponse } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';

import { CacheEntryOptions, CacheService, handleCacheResponse } from '@bizappframework/ng-cache';
import { ConfigLoader } from '@bizappframework/ng-config';
import { CONFIG_ENDPOINT_URL } from '@bizappframework/ng-config/http-loader';
import { map } from 'rxjs/operators';

export interface ConfigCacheHttpLoaderOptions {
    cacheConfigKey?: string;
    endpointUrl?: string | (() => string);
}

export const CONFIG_CACHE_HTTP_LOADER_OPTIONS = new InjectionToken<ConfigCacheHttpLoaderOptions>('CONFIG_CACHE_KEY');

@Injectable()
export class ConfigCacheHttpLoader implements ConfigLoader {
    private readonly _cacheConfigKey: string = 'app.config';
    private readonly _endpoint: string = '/appsettings.json';

    constructor(private readonly _cacheService: CacheService, private readonly _httpClient: HttpClient,
        @Optional() @Inject(CONFIG_CACHE_HTTP_LOADER_OPTIONS) options?: ConfigCacheHttpLoaderOptions,
        @Optional() @Inject(CONFIG_ENDPOINT_URL) endpointUrl?: string) {
        if (options && options.endpointUrl) {
            this._endpoint = typeof options.endpointUrl === 'string' ? options.endpointUrl : options.endpointUrl();
        } else if (endpointUrl) {
            this._endpoint = endpointUrl;
        }

        if (options && options.cacheConfigKey) {
            this._cacheConfigKey = options.cacheConfigKey;
        }
    }

    get source(): string {
        return 'CacheHttpLoader';
    }

    async load(): Promise<{ [key: string]: any }> {
        return this._cacheService.getOrSet(this._cacheConfigKey,
            (entryOptions: CacheEntryOptions) => {
                return this._httpClient.get(this._endpoint, { observe: 'response' }).pipe(map(
                    (response: HttpResponse<{ [key: string]: any }>) => {
                        return handleCacheResponse<{ [key: string]: any }>(response,
                            `'${this._cacheConfigKey}.cacheinfo'`,
                            entryOptions);
                    }));
            }).toPromise();
    }
}
