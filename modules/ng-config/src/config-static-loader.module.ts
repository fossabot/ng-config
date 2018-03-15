import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { CONFIG_LOADER } from './config-loader';
import { CONFIG_STATIC_DATA, ConfigStaticData } from './config-static-data';
import { ConfigStaticLoader } from './config-static-loader';

/**
 * Config static loader module
 */
@NgModule({
    providers: [
        {
            provide: CONFIG_LOADER,
            useClass: ConfigStaticLoader,
            multi: true
        }
    ]
})
export class ConfigStaticLoaderModule {
    constructor(@Optional() @SkipSelf() parentModule: ConfigStaticLoaderModule) {
        if (parentModule) {
            throw new Error('ConfigStaticLoaderModule has already been loaded, import in root module only.');
        }
    }

    static forRoot(data: ConfigStaticData): ModuleWithProviders {
        return {
            ngModule: ConfigStaticLoaderModule,
            providers: [
                {
                    provide: CONFIG_STATIC_DATA,
                    useValue: data
                }
            ],
        };
    }
}
