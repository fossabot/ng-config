import { APP_INITIALIZER, ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';

import { ConfigPipe } from './config.pipe';
import { ConfigLoader } from './config.loader';
import { ConfigStaticLoader } from './config.static.loader';
import { ConfigService } from './config.service';

@NgModule({
    declarations: [ConfigPipe],
    exports: [ConfigPipe]
})
export class ConfigModule {
    static forRoot(loaderProvider: Provider = {
        provide: ConfigLoader,
        useFactory: (configStaticLoaderFactory)
    }, initializerFactory: (configService: ConfigService) => () => Promise<any> = configAppInitializerFactory): ModuleWithProviders {
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

export function configAppInitializerFactory(configService: ConfigService): () => Promise<any> {
    const res = () => configService.load();
    return res;
}
