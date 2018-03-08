import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';

import { ConfigLoader } from './config.loader';
import { ConfigPipe } from './config.pipe';
import { ConfigService } from './config.service';
import { ConfigStaticLoader } from './config.static.loader';

@NgModule({
    declarations: [ConfigPipe],
    exports: [ConfigPipe]
})
export class ConfigModule {
    static forRoot(loaderProvider: Provider = {
                provide: ConfigLoader,
                useFactory: (configStaticLoaderFactory)
            },
            // tslint:disable-next-line:no-any
            initializerFactory: (configService: ConfigService) => () => Promise<any> = configAppInitializerFactory):
        ModuleWithProviders {
        return {
            ngModule: ConfigModule,
            providers: [
                loaderProvider,
                ConfigService,
                {
                    provide: APP_INITIALIZER,
                    useFactory: (initializerFactory),
                    deps: [ConfigService],
                    multi: true
                }
            ]
        };
    }

    constructor(@Optional() @SkipSelf() parentModule: ConfigModule) {
        if (parentModule) {
            throw new Error('ConfigModule already loaded, import in root module only.');
        }
    }
}

export function configStaticLoaderFactory(): ConfigLoader {
    return new ConfigStaticLoader({});
}

// tslint:disable-next-line:no-any
export function configAppInitializerFactory(configService: ConfigService): () => Promise<any> {
    return async () => configService.load();
}
