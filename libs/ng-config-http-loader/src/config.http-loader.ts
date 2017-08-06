// angular
import { Http } from '@angular/http';

// libs
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { ConfigLoader } from '@bizappframework/ng-config';

export class ConfigHttpLoader implements ConfigLoader {
// ReSharper disable once InconsistentNaming
    private _resultSelector: string;

    constructor(private readonly http: Http,
        private readonly endpoint: string = '/appsettings.json') {
    }

    get resultSelector(): string {
        return this._resultSelector;
    }
    set resultSelector(value: string) {
        this._resultSelector = value;
    }

    get type(): string {
        return 'ConfigHttpLoader';
    }

    loadSettings(): Promise<any> {
        return this.http.get(this.endpoint)
            .map((res: any) => res.json())
            .toPromise()
            .then((settings: any) => this.resultSelector ? settings[this.resultSelector] : settings);
    }

    loadSettingsSync(): any {
        throw new Error(`'loadSettingsSync' is not supported in 'ConfigHttpLoader'.`);
    }
}
