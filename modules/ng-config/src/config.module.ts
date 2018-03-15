import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ConfigPipe } from './config.pipe';
import { ConfigService } from './config.service';

@NgModule({
    declarations: [ConfigPipe],
    exports: [ConfigPipe],
    providers: [
        ConfigService
    ]
})
export class ConfigModule {
    constructor(@Optional() @SkipSelf() parentModule: ConfigModule) {
        if (parentModule) {
            throw new Error('ConfigModule has already been loaded, import in root module only.');
        }
    }

    static loadWithAppInitializer(): ModuleWithProviders {
        return {
            ngModule: ConfigModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: (configAppInitializerFactory),
                    deps: [ConfigService],
                    multi: true
                }
            ]
        };
    }
}

export function configAppInitializerFactory(configService: ConfigService): () => Promise<any> {
    // tslint:disable-next-line:no-unnecessary-local-variable
    const res = async () => configService.load();

    return res;
}
