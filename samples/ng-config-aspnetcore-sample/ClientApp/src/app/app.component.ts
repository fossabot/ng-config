import { Component } from '@angular/core';

import { ConfigService } from '@bizappframework/ng-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private readonly _configService: ConfigService) { }

    get configJson(): string {
        const config = this._configService.getSettings();
        return JSON.stringify(config, null, 2);
    }
}
