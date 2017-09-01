import { NgModule } from '@angular/core';

import { ConfigPipe } from './config.pipe';

export { ConfigLoader } from './config.loader';
export { ConfigStaticLoader } from './config.static.loader';
export { ConfigService } from './config.service';
export { ConfigPipe } from './config.pipe';

@NgModule({
    declarations: [ConfigPipe],
    exports: [ConfigPipe]
})
export class ConfigPipeModule {}
