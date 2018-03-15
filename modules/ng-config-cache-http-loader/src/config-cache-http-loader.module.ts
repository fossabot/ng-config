import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CONFIG_LOADER } from '@bizappframework/ng-config';

import {
    CONFIG_CACHE_HTTP_LOADER_OPTIONS,
    ConfigCacheHttpLoader,
    ConfigCacheHttpLoaderOptions
} from './config-cache-http-loader';

/**
 * Config cache http loader module
 */
@NgModule({
    providers: [
        {
            provide: CONFIG_LOADER,
            useClass: ConfigCacheHttpLoader,
            multi: true
        }
    ]
})
export class ConfigCacheHttpLoaderModule {
    constructor(@Optional() @SkipSelf() parentModule: ConfigCacheHttpLoaderModule) {
        if (parentModule) {
            throw new Error('ConfigCacheHttpLoaderModule has already been loaded, import in root module only.');
        }
    }

    static forRoot(options: ConfigCacheHttpLoaderOptions): ModuleWithProviders {
        return {
            ngModule: ConfigCacheHttpLoaderModule,
            providers: [
                {
                    provide: CONFIG_CACHE_HTTP_LOADER_OPTIONS,
                    useValue: options
                }
            ]
        };
    }
}
