ng-config
=====================

[![npm version](https://badge.fury.io/js/%40bizappframework%2Fng-config.svg)](https://badge.fury.io/js/%40bizappframework%2Fng-config)

Contains configuration service libraries for Angular app.

Installation
---------------

```bash
npm install @bizappframework/ng-config
```


Setup
---------------

```typescript
import { ConfigModule, ConfigStaticLoaderModule } from '@bizappframework/ng-config';

@NgModule({    
    imports: [
        // Other module imports

        // Config
        ConfigModule.loadWithAppInitializer(),
        ConfigStaticLoaderModule.forRoot({ key1: 'value1' })
    ]    
})
export class AppModule { }
```

Usage
---------------

```typescript
import { Component } from '@angular/core';

import { ConfigService } from '@bizappframework/ng-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    constructor(private readonly _configService: ConfigService) {
        const allSettings = this._configService.getSettings();
        console.log('settings: ', allSettings);

        const loggingSettings = this._configService.getSettings<LoggingOptions>('logging');
        console.log('loggingSettings: ', loggingSettings);
    }
}
```

Example
---------------

[ng-config-aspnetcore-sample](https://github.com/BizAppFramework/ng-config/tree/master/samples/ng-config-aspnetcore-sample)

License
---------------

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)