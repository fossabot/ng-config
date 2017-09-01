import { Component } from '@angular/core';

import { ConfigService } from '@bizappframework/ng-config';

@Component({
  selector: 'app-root, app',
  templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(private readonly configService: ConfigService) { }

    get configJson(): string {
        const config = this.configService.getSettings();
        return JSON.stringify(config, null, 2);
    }
}
