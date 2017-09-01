import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Http } from '@angular/http';
import { ConfigLoader } from '@bizappframework/ng-config';

export class ConfigHttpLoader implements ConfigLoader {

    private cachedSettings: { [key: string]: any } = {};

    constructor(private readonly http: Http, private readonly endpoint: string) {
    }

    getType(): string {
        return 'ConfigHttpLoader';
    }

    load(): Promise<any> {
        return this.http.get(this.endpoint)
            .map((res: any) => {
                this.cachedSettings = Object.assign(this.cachedSettings, res.json());
                return this.cachedSettings;
            })
            .toPromise();
    }

    getLoadedSettings(): { [key: string]: any; } {
        return this.cachedSettings;
    }
}
