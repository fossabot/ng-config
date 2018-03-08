import { Injectable, Pipe, PipeTransform } from '@angular/core';

import { ConfigService } from './config.service';

@Injectable()
@Pipe({
    name: 'config'
})
export class ConfigPipe implements PipeTransform {
    constructor(private readonly _config: ConfigService) {
    }

    // tslint:disable-next-line:no-any
    transform(value: string | string[]): any {
        return this._config.getSettings(value);
    }
}
