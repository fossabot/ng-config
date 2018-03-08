 import { ConfigLoader } from './config.loader';

export class ConfigStaticLoader implements ConfigLoader {

    // tslint:disable-next-line:no-any
    constructor(readonly settings: { [key: string]: any }) {
    }

    source(): string {
        return 'StaticLoader';
    }

    // tslint:disable-next-line:no-any
    async load(): Promise<{ [key: string]: any }> {
        return Promise.resolve(this.settings);
    }
}
