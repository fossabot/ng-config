import 'rxjs/add/operator/toPromise';

import { HttpClient } from '@angular/common/http';
import { ConfigLoader } from '@bizappframework/ng-config';

export class ConfigHttpLoader implements ConfigLoader {

    constructor(private readonly _httpClient: HttpClient, private readonly _endpoint: string) {
    }

    source(): string {
        return 'ConfigHttpLoader';
    }

    load(): Promise<any> {
        return this._httpClient.get(this._endpoint)
            .toPromise();
    }
}
