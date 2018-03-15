import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';

import { ConfigLoader } from '@bizappframework/ng-config';

import { CONFIG_ENDPOINT_URL } from './config-endpoint-url';

@Injectable()
export class ConfigHttpLoader implements ConfigLoader {
    private readonly _endpoint: string = '/appsettings.json';

    constructor(private readonly _httpClient: HttpClient,
        @Optional() @Inject(CONFIG_ENDPOINT_URL) endpoint: string) {
        if (endpoint != null) {
            this._endpoint = endpoint;
        }
    }

    get source(): string {
        return 'HttpLoader';
    }

    // tslint:disable-next-line:no-any
    async load(): Promise<{ [key: string]: any }> {
        return this._httpClient.get(this._endpoint)
            .toPromise();
    }
}
