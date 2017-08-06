// Ref from: https://github.com/ngx-config/core
// Last ref: 13 May, 2017

// angular
import { NgModule } from '@angular/core';

// module
import { ConfigPipe } from './config.pipe';

// re-export
export * from './config.loader';
export * from './config.pipe';
export * from './config.service';

@NgModule({
    declarations: [ConfigPipe],
    exports: [ConfigPipe]
})
export class ConfigPipeModule {}
