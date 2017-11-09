import './spec-polyfills';

declare const __karma__: any;
declare const __angularbuild__: any;

if (typeof __karma__ !== 'undefined') {
    // Prevent Karma from running prematurely.
    __karma__.loaded = function () { };
}

import { getTestBed } from '@angular/core/testing';
import { platformServerTesting, ServerTestingModule } from '@angular/platform-server/testing';

getTestBed().initTestEnvironment(
    ServerTestingModule,
    platformServerTesting()
);

if (typeof __karma__ !== 'undefined') {
    let specDir = './';
    if (typeof __angularbuild__ != 'object' &&
        typeof __angularbuild__.buildContext != 'object' &&
        typeof __angularbuild__.buildContext.specDir === 'string') {
        specDir = __angularbuild__.buildContext.specDir;
    }
    // Then we find all the tests.
    const context = (require as any).context(specDir, true, /[\.\-]spec\.ts$/);
    // And load the modules.
    context.keys().map(context);
    // Finally, start Karma to run the tests.
    __karma__.start();

}
